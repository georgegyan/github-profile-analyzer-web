from fastapi import APIRouter, HTTPException

from app.schemas.repository_schema import RepositoryAnalytics
from app.services.github_services import get_user_repositories
from app.services.github_client import GitHubAPIError

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
        repositories = get_user_repositories(username)

    except GitHubAPIError as error:
        raise HTTPException(
            status_code=404,
            detail=str(error)
        )

    formatted_repositories = []

    for repository in repositories:
        formatted_repositories.append({
            "name": repository["name"],
            "description": repository["description"],
            "stars": repository["stargazers_count"],
            "forks": repository["forks_count"],
            "language": repository["language"],
            "html_url": repository["html_url"]
        })

    total_stars = sum(
        repository["stargazers_count"]
        for repository in repositories
    )

    return {
        "username": username,
        "total_repositories": len(repositories),
        "total_stars": total_stars,
        "repositories": formatted_repositories
    }