# ============================================================================
# Name        : ePortfolio - user
# Author      : Joe Andersen
# Description : pydantic schema used for data validation
# ============================================================================
from typing import Optional

from pydantic import BaseModel, EmailStr, Field


class UserSchema(BaseModel):
    email: EmailStr = Field(...)  # ... means field is required
    name: str = Field(...)
    password: str = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "email": "stanley.hudson@dundermifflin.com",
                "name": "Stanley Hudson",
                "password": "wouldnt you like to know",
            }
        }


class UserLoginSchema(BaseModel):
    email: EmailStr = Field(...)
    password: str = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "email": "stanley.hudson@dundermifflin.com",
                "password": "crosswords",
            }
        }
