# ============================================================================
# Name        : ePortfolio - user
# Author      : Joe Andersen
# Description : Self documenting route
# ============================================================================
from fastapi import APIRouter, Body, Depends
from fastapi.encoders import jsonable_encoder
from server.database import AsyncIOMotorClient, get_database
from server.controllers.user import UserController
from server.models.user import UserSchema, UserLoginSchema
from server.models.response import ErrorResponseModel, ResponseModel
from server.auth.auth_handler import sign_JWT

router = APIRouter()
USER = UserController()


@router.post("/register", response_description="User data added into the database")
async def add_user_data(
    user: UserSchema = Body(...), db: AsyncIOMotorClient = Depends(get_database)
):
    user = jsonable_encoder(user)
    response = await USER.add_user(user, db)
    if response:
        return ResponseModel(
            sign_JWT(response.get("email")), "User added successfully."
        )
    return ErrorResponseModel(
        "An error occurred.", 404, "Username unavailable please choose another."
    )


@router.post("/login", response_description="Grant access to verified user")
async def verify_user(
    user: UserLoginSchema = Body(...), db: AsyncIOMotorClient = Depends(get_database)
):
    user = jsonable_encoder(user)
    response = await USER.retrieve_user(user, db)
    if response:
        return ResponseModel(
            sign_JWT(response.get("email")), "User logged in successfully."
        )
    return ErrorResponseModel(
        "An error occurred.", 404, "Incorrect username or password provided."
    )
