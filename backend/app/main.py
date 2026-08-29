from fastapi import FastAPI

from app.routers.user_router import router as user_router

app = FastAPI(
    title="GitHub Profile Analyzer API",
    version="1.0.0"
)

app.include_router(user_router)


@app.get("/")
def root():
    return {
        "message": "GitHub Profile Analyzer API is running"
    }