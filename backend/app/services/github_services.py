from app.services.github_client import github_get

def get_user_profile(username: str):
    return github_get(f"/users/{username}")


def get_user_repositories(username: str):
    return github_get(
        f"/users/{username}/repos",
        params={
            "per_page": 100,
            "sort": "updated"
        }
    )

def get_user_events(username: str):
    return github_get(
        f"/users/{username}/events",
        params={
            "per_page": 100
        }
    )