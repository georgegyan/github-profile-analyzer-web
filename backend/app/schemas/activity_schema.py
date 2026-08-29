from pydantic import BaseModel

class ActivityType(BaseModel):
    event_type: str
    count: int

class DailyActivity(BaseModel):
    date: str
    count: int

class ActivityAnalytics(BaseModel):
    username: str
    total_events: int
    active_repositories: int
    event_types: list[ActivityType]
    daily_activity: list[DailyActivity]