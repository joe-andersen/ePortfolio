# ============================================================================
# Name        : ePortfolio - user
# Author      : Joe Andersen
# Description : Controller for interacting with the users collection
# ============================================================================
import logging
from server.database import AsyncIOMotorClient
from bson.objectid import ObjectId
from pydantic import EmailStr
from server.auth.auth_handler import encrypt, decrypt

logger = logging.getLogger("uvicorn")


class UserController:
    def __init__(self):
        self.collection = "users"
        self.database_name = "travlr"

    # helpers
    def map(self, user) -> dict:
        return {
            "id": str(user["_id"]),
            "email": user["email"],
            "name": user["name"],
        }

    def verify_password(self, supplied_password: str, retrieved_password: str):
        return supplied_password.encode() == decrypt(retrieved_password)

    # Add a new user into the database
    async def add_user(self, user: dict, db: AsyncIOMotorClient) -> dict:
        user_exists = await db[self.database_name][self.collection].find_one(
            {"email": user.get("email")}
        )

        if not user_exists:
            user["password"] = encrypt(user.get("password").encode())
            result = await db[self.database_name][self.collection].insert_one(user)
            new_user = await db[self.database_name][self.collection].find_one(
                {"_id": result.inserted_id}
            )
            return self.map(new_user)

    # Retrieve a user with a matching email
    async def retrieve_user(self, user: dict, db: AsyncIOMotorClient) -> dict:
        result = await db[self.database_name][self.collection].find_one(
            {"email": user.get("email")}
        )
        if result and self.verify_password(
            user.get("password"), result.get("password")
        ):
            return self.map(result)
