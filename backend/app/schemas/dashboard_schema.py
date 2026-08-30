from pydantic import BaseModel

from app.schemas.user_schema import UserProfile
from app.schemas.repository_schema import RepositoryAnalytics
from app.schemas.language_schema import LanguageAnalytics
from app.schemas.score_schema import DeveloperScore
from app.schemas.activity_schema import ActivityAnalytics


class DashboardResponse(BaseModel):
    profile: UserProfile
    repositories: RepositoryAnalytics
    languages: LanguageAnalytics
    score: DeveloperScore
    activity: ActivityAnalytics