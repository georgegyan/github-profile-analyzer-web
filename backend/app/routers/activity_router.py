from fastapi import APIRouter, HTTPException

from app.schemas.activity_schema import ActivityAnalytics
from app.services.activity_service import analyze_activity
from app.services.github_client import GitHubAPIError
from app.services.github_services import get_user_events

router = APIRouter(
    prefix="/api/users",
    tags=["Activity"]
)


@router.get(
    "/{username}/activity",
    response_model=ActivityAnalytics
)
def get_activity(username: str):

    try:
        events = get_user_events(username)

    except GitHubAPIError as error:
        raise HTTPException(
            status_code=404,
            detail=str(error)
        )

    result = analyze_activity(events)

    return {
        "username": username,
        **result
    }