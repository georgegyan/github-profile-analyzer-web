from fastapi import APIRouter, HTTPException

from app.schemas.score_schema import DeveloperScore
from app.services.github_services import (
    get_user_profile,
    get_user_repositories
)
from app.services.score_service import calculate_score
from app.services.github_client import GitHubAPIError

router = APIRouter(
    prefix="/api/users",
    tags=["Developer Score"]
)

@router.get(
    "/{username}/score",
    response_model=DeveloperScore
)
def get_developer_score(username: str):

    try:
        user = get_user_profile(username)
        repositories = get_user_repositories(username)

    except GitHubAPIError as error:
        raise HTTPException(
            status_code=404,
            detail=str(error)
        )

    recent_repositories = repositories[:5]

    total_stars = sum(
        repository["stargazers_count"]
        for repository in repositories
    )

    result = calculate_score(
        repositories=len(repositories),
        followers=user["followers"],
        stars=total_stars,
        recent_repositories=len(recent_repositories)
    )

    return {
        "username": username,
        **result
    }