from fastapi import APIRouter, HTTPException

from app.schemas.dashboard_schema import DashboardResponse
from app.services.github_client import GitHubAPIError
from app.services.github_services import (
    get_user_profile,
    get_user_repositories,
    get_user_events
)
from app.services.language_service import analyze_languages
from app.services.score_service import calculate_score
from app.services.activity_service import analyze_activity


router = APIRouter(
    prefix="/api/users",
    tags=["Dashboard"]
)


@router.get(
    "/{username}/dashboard",
    response_model=DashboardResponse
)
def get_dashboard(username: str):

    try:
        user = get_user_profile(username)
        repositories = get_user_repositories(username)
        events = get_user_events(username)

    except GitHubAPIError as error:
        raise HTTPException(
            status_code=404,
            detail=str(error)
        )

    # Repository analytics

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

    repository_data = {
        "username": username,
        "total_repositories": len(repositories),
        "total_stars": total_stars,
        "repositories": formatted_repositories
    }

    # Language analytics

    language_data = analyze_languages(repositories)

    # Activity analytics

    activity_data = analyze_activity(events)

    # Developer score

    recent_repositories = repositories[:5]

    score_data = calculate_score(
        repositories=len(repositories),
        followers=user["followers"],
        stars=total_stars,
        recent_repositories=len(recent_repositories)
    )

    # Profile data

    profile_data = {
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

    return {
        "profile": profile_data,
        "repositories": repository_data,
        "languages": {
            "username": username,
            "total_repositories": len(repositories),
            "languages": language_data
        },
        "score": {
            "username": username,
            **score_data
        },
        "activity": {
            "username": username,
            **activity_data
        }
    }