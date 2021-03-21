# ============================================================================
# Name        : ePortfolio - trip
# Author      : Joe Andersen
# Description : pydantic schema used for data validation
# ============================================================================
from datetime import datetime
from pydantic import BaseModel, Field
from typing import Optional


class TripSchema(BaseModel):
    code: str = Field(...)
    name: str = Field(...)
    length: str = Field(...)
    start: datetime = Field(...)
    resort: str = Field(...)
    perPerson: str = Field(...)
    image: str = Field(...)
    description: str = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "code": "DAWR210315",
                "name": "Dawson’s Reef",
                "length": "4 nights / 5 days",
                "start": "2021-03-15T08:00:00Z",
                "resort": "Blue Lagoon, 4 stars",
                "perPerson": "1199.00",
                "image": "reef2.jpg",
                "description": "<p>At Dawson's... Integer magna leo, posuere et dignissim vitae, porttitor at odio. Pellentesque a metus nec magna placerat volutpat. Nunc nisi mi, elementum sit amet aliquet quis, tristique quis nisl. Curabitur odio lacus, blandit ut hendrerit </p> <p> vulputate, vulputate at est. Morbi aliquet viverra metus eu consectetur. In lorem dui, elementum sit amet convallis ac, tincidunt vel sapien. </p>",
            }
        }


class TripUpdateSchema(BaseModel):
    code: Optional[str]
    name: Optional[str]
    length: Optional[str]
    start: Optional[datetime]
    resort: Optional[str]
    perPerson: Optional[str]
    image: Optional[str]
    description: Optional[str]

    class Config:
        schema_extra = {
            "example": {
                "code": "DAWR210315",
                "name": "Dawson’s Reef",
                "length": "6 nights / 7 days",
                "start": "2021-03-15T08:00:00Z",
                "resort": "Blue Lagoon, 4 stars",
                "perPerson": "1799.00",
                "image": "reef2.jpg",
                "description": "<p>At Dawson's... Integer magna leo, posuere et dignissim vitae, porttitor at odio. Pellentesque a metus nec magna placerat volutpat. Nunc nisi mi, elementum sit amet aliquet quis, tristique quis nisl. Curabitur odio lacus, blandit ut hendrerit </p> <p> vulputate, vulputate at est. Morbi aliquet viverra metus eu consectetur. In lorem dui, elementum sit amet convallis ac, tincidunt vel sapien. </p>",
            }
        }
