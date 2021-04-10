# ============================================================================
# Name        : ePortfolio - trip
# Author      : Joe Andersen
# Description : Self documenting route
# ============================================================================
from fastapi import APIRouter, Body, Depends
from fastapi.encoders import jsonable_encoder
from server.database import AsyncIOMotorClient, get_database
from server.controllers.trip import TripController
from server.models.trip import TripSchema, TripUpdateSchema
from server.models.response import ErrorResponseModel, ResponseModel
from server.auth.auth_bearer import AuthBearer


router = APIRouter()
TRIP = TripController()


@router.get(
    "/",
    response_description="Trips retrieved",
)
async def get_trips(db: AsyncIOMotorClient = Depends(get_database)):
    response = await TRIP.retrieve_trips(db)
    if response:
        return ResponseModel(response, "Trips retrieved successfully.")
    return ErrorResponseModel(
        "An error occurred.", 404, "Unable to complete the request."
    )


@router.get(
    "/{code}",
    dependencies=[Depends(AuthBearer())],
    response_description="Trip data retrieved",
)
async def get_trip(code: str, db: AsyncIOMotorClient = Depends(get_database)):
    response = await TRIP.retrieve_trip(code, db)
    if response:
        return ResponseModel(response, "Trip data retrieved successfully.")
    return ErrorResponseModel(
        "An error occurred.", 404, "Unable to complete the request."
    )


@router.post(
    "/",
    dependencies=[Depends(AuthBearer())],
    response_description="Trip data added into the database.",
)
async def add_trip(
    trip: TripSchema = Body(...), db: AsyncIOMotorClient = Depends(get_database)
):
    trip = jsonable_encoder(trip)
    response = await TRIP.add_trip(trip, db)
    if response:
        return ResponseModel(response, "Trip added successfully.")
    return ErrorResponseModel("An error occurred.", 404, "Trip could not be added")


@router.put(
    "/",
    dependencies=[Depends(AuthBearer())],
    response_description="Update complete",
)
async def update_trip(
    id: str,
    trip: TripUpdateSchema = Body(...),
    db: AsyncIOMotorClient = Depends(get_database),
):
    trip = {key: value for key, value in trip.dict().items() if value is not None}
    updated_trip = await TRIP.update_trip(id, trip, db)
    if updated_trip:
        return ResponseModel(
            f"Trip with id: {id} update was successful",
            "Trip updated successfully.",
        )
    return ErrorResponseModel("An error occurred", 404, "Unable to update trip data.")
