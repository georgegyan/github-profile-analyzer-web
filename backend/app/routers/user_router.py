from fastapi import APIRouter, HTTPException
from app.services.github_services import get_user_profile
from app.schemas.user_schema import UserProfile

router = APIRouter(
    prefix="/api/users",
    tags=["Users"]
)

@router.get("/{username}", response_model=UserProfile)
def get_user(username: str):

    user = get_user_profile(username)

    if not user:
        raise HTTPException(
            status_code=404,
            detail="GitHub user not found"
        )

    return {
        "username": user["login"],
        "name": user["name"],
        "avatar_url": user["avatar_url"],
        "bio": user["bio"],
        "company": user["company"],
        "location": user["location"],
        "blog": user["blog"],
        "public_repos": user["public_repos"],
        "followers": user["followers"],
        "following": user["following"],
        "created_at": user["created_at"]
    }