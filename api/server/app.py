# ============================================================================
# Name        : ePortfolio - app
# Author      : Joe Andersen
# Description : FastAPI app
# ============================================================================
from fastapi import FastAPI
from server.routes.user import router as UserRouter
from server.routes.trip import router as TripRouter
from server.database_utils import connect_db, disconnect_db


# init fastapi
app = FastAPI(
    title="Joe Andersen ePortfolio API",
    description="RestfulAPI example, with auto docs.",
    version="0.0.1",
)


# register app events
app.add_event_handler("startup", connect_db)
app.add_event_handler("shutdown", disconnect_db)

# register routes
app.include_router(UserRouter, tags=["User"], prefix="/user")
app.include_router(TripRouter, tags=["Trip"], prefix="/trip")
