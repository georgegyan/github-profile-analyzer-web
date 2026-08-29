from pydantic import BaseModel


class Repository(BaseModel):
    name: str
    description: str | None
    stars: int
    forks: int
    language: str | None
    html_url: str


class RepositoryAnalytics(BaseModel):
    username: str
    total_repositories: int
    total_stars: int
    repositories: list[Repository]