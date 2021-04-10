# ============================================================================
# Name        : ePortfolio - auth_handler
# Author      : Joe Andersen
# Description : Handlers for JWT sign and validate, encrypt and decrypt
# user password.
# ============================================================================
import logging
import time
import jwt
import dotenv
import base64
from typing import Dict
from pydantic import EmailStr
from cryptography.fernet import Fernet

logger = logging.getLogger("uvicorn")
dotenv_file = dotenv.find_dotenv()

with open("/app/key.txt", "rb") as key_file:
    JWT_SECRET = key_file.read()

JWT_ALGORITHM = dotenv.get_key(dotenv_file, "algorithm")


def token_response(token: str) -> dict:
    return {"access_token": token}


def sign_JWT(email: EmailStr) -> Dict[str, str]:
    payload = {"email": email, "expires": time.time() + 86400} # token is good for 24 hours
    token = jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)

    return token_response(token)


def decode_JWT(token: str) -> dict:
    try:
        decoded_token = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        return decoded_token if decoded_token.get("expires") >= time.time() else None
    except:
        return {}


def encrypt(string: str) -> str:
    """
    Encrypt string
    """
    f = Fernet(JWT_SECRET)
    return f.encrypt(string)


def decrypt(string: str) -> str:
    """
    Decrypt string
    """
    f = Fernet(JWT_SECRET)
    return f.decrypt(string)
