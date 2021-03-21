# ============================================================================
# Name        : ePortfolio - database_utils
# Author      : Joe Andersen
# Description : Database startup and shutdown events
# ============================================================================
import logging
import dotenv
from motor.motor_asyncio import AsyncIOMotorClient
from server.database import db

logger = logging.getLogger("uvicorn")

dotenv_file = dotenv.find_dotenv()

HOST = dotenv.get_key(dotenv_file, "host")
PORT = dotenv.get_key(dotenv_file, "port")


async def connect_db():
    logger.info("Connecting to database...")
    db.client = AsyncIOMotorClient(f"mongodb://{HOST}:{PORT}")
    logger.info("Database connection established!")


async def disconnect_db():
    logger.info("Closing database connection...")
    db.client.close()
    logger.info("Database connection closed!")
