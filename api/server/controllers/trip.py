# ============================================================================
# Name        : ePortfolio - trip
# Author      : Joe Andersen
# Description : Controller for interacting with the trips collection
# ============================================================================
from typing import List
from server.database import AsyncIOMotorClient
from bson.objectid import ObjectId
from server.auth.auth_bearer import AuthBearer


class TripController:
    def __init__(self):
        self.collection = "trips"
        self.database_name = "travlr"

    # helpers
    def map(self, trip) -> dict:
        return {
            "id": str(trip["_id"]),
            "code": trip["code"],
            "name": trip["name"],
            "length": trip["length"],
            "start": trip["start"],
            "resort": trip["resort"],
            "perPerson": trip["perPerson"],
            "image": trip["image"],
            "description": trip["description"],
        }

    async def add_trip(self, trip: dict, db: AsyncIOMotorClient) -> dict:
        trip_exists = await db[self.database_name][self.collection].find_one(
            {"code": trip.get("code")}
        )

        if not trip_exists:
            result = await db[self.database_name][self.collection].insert_one(trip)
            new_trip = await db[self.database_name][self.collection].find_one(
                {"_id": result.inserted_id}
            )
            return self.map(new_trip)

    async def update_trip(self, id: str, data: dict, db: AsyncIOMotorClient) -> bool:
        # ensure data is not empty
        if len(data) < 1:
            return False
        trip = await db[self.database_name][self.collection].find_one({"_id": ObjectId(id)})

        if trip:
            updated_trip = await db[self.database_name][self.collection].update_one(
                {"_id": ObjectId(id)}, {"$set": data}
            )
            if updated_trip:
                return True
            return False

    async def retrieve_trip(self, code: str, db: AsyncIOMotorClient) -> dict:
        trip = await db[self.database_name][self.collection].find_one({"code": code})
        if trip:
            return self.map(trip)

    async def retrieve_trips(self, db: AsyncIOMotorClient) -> List[dict]:
        trips = []
        async for trip in db[self.database_name][self.collection].find():
            trips.append(self.map(trip))
        return trips
