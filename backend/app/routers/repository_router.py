from fastapi import APIRouter, HTTPException

from app.schemas.repository_schema import RepositoryAnalytics
from app.services.github_client import GitHubAPIError
from app.services.repository_service import analyze_repositories

router = APIRouter(
    prefix="/api/users",
    tags=["Repositories"]
)


@router.get(
    "/{username}/repos",
    response_model=RepositoryAnalytics
)
def get_repositories(username: str):

    try:
        return analyze_repositories(username)

    except GitHubAPIError as error:
        raise HTTPException(
            status_code=404,
            detail=str(error)
        )