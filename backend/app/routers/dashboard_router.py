from fastapi import APIRouter, HTTPException

from app.schemas.dashboard_schema import DashboardResponse
from app.services.dashboard_service import build_dashboard
from app.services.github_client import GitHubAPIError

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
        return build_dashboard(username)

    except GitHubAPIError as error:
        raise HTTPException(
            status_code=404,
            detail=str(error)
        )