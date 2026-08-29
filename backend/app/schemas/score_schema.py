from pydantic import BaseModel

class ScoreBreakdown(BaseModel):
    repository_score: int
    follower_score: int
    star_score: int
    activity_score: int

class DeveloperScore(BaseModel):
    username: str
    score: int
    level: str
    breakdown: ScoreBreakdown