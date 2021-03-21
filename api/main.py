# ============================================================================
# Name        : ePortfolio - main
# Author      : Joe Andersen
# Description : Entry point for running the application
# ============================================================================
import uvicorn
import dotenv
import os
from cryptography.fernet import Fernet

if __name__ == "__main__":
    """
    In order to keep this key private we generate it if
    it has never been generated before.
    """
    dotenv_file = dotenv.find_dotenv()
    secret = dotenv.get_key(dotenv_file, "secret")

    if secret == "not_generated":
        key = Fernet.generate_key()
        with open("key.txt", "wb") as key_file:
            key_file.write(key)
        dotenv.set_key(dotenv_file, "secret", "generated")

    # run the app
    uvicorn.run("server.app:app", host="0.0.0.0", port=8000, reload=True)
