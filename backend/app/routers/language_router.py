from fastapi import APIRouter, HTTPException

from app.schemas.language_schema import LanguageAnalytics
from app.services.github_services import get_user_repositories
from app.services.language_service import analyze_languages

router = APIRouter(
    prefix="/api/users",
    tags=["Languages"]
)

@router.get(
    "/{username}/languages",
    response_model=LanguageAnalytics
)
def get_language_analysis(username: str):

    repositories = get_user_repositories(username)

    if repositories is None:
        raise HTTPException(
            status_code=404,
            detail="GitHub user not found"
        )

    languages = analyze_languages(repositories)

    return {
        "username": username,
        "total_repositories": len(repositories),
        "languages": languages
    }