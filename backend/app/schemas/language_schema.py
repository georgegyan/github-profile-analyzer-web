from pydantic import BaseModel


class LanguageStats(BaseModel):
    name: str
    repositories: int
    percentage: float


class LanguageAnalytics(BaseModel):
    username: str
    total_repositories: int
    languages: list[LanguageStats]