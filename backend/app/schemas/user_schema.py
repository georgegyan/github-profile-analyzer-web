from pydantic import BaseModel  # type: ignore

class UserProfile(BaseModel):
    username: str
    name: str | None
    avatar_url: str | None
    bio: str | None
    company: str | None
    location: str | None
    blog_url: str | None
    public_repos: int 
    followers: int
    following: int
    created_at: str