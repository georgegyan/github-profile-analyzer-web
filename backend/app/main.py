from fastapi import FastAPI

from app.routers.user_router import router as user_router
from app.routers.repository_router import router as repository_router
from app.routers.language_router import router as language_router
from app.routers.score_router import router as score_router
from app.routers.activity_router import router as activity_router

app = FastAPI(
    title="GitHub Profile Analyzer API",
    version="1.0.0"
)

app.include_router(user_router)
app.include_router(repository_router)
app.include_router(language_router)
app.include_router(score_router)
app.include_router(activity_router)

@app.get("/")
def root():
    return {
        "message": "GitHub Profile Analyzer API is running"
    }