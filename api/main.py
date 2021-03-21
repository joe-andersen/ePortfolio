# ============================================================================
# Name        : ePortfolio - main
# Author      : Joe Andersen
# Description : Entry point for running the application
# ============================================================================
import uvicorn

if __name__ == "__main__":
    uvicorn.run("server.app:app", host="0.0.0.0", port=8000, reload=True)
