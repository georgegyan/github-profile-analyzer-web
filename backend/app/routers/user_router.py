from fastapi import APIRouter, HTTPException

from app.schemas.user_schema import UserProfile
from app.services.github_client import GitHubAPIError
from app.services.github_services import get_user_profile


router = APIRouter(
    prefix="/api/users",
    tags=["Users"]
)


@router.get(
    "/{username}",
    response_model=UserProfile
)
def get_user(username: str):

    try:
        user = get_user_profile(username)

    except GitHubAPIError as error:
        raise HTTPException(
            status_code=404,
            detail=str(error)
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