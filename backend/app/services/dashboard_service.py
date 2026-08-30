from app.services.github_services import (
    get_user_profile,
    get_user_repositories,
    get_user_events
)
from app.services.repository_service import analyze_repositories
from app.services.language_service import analyze_languages
from app.services.score_service import calculate_score
from app.services.activity_service import analyze_activity


def build_dashboard(username: str):

    user = get_user_profile(username)

    repositories = get_user_repositories(username)

    events = get_user_events(username)

    repository_data = analyze_repositories(username)

    language_data = analyze_languages(repositories)

    activity_data = analyze_activity(events)

    total_stars = sum(
        repository["stargazers_count"]
        for repository in repositories
    )

    recent_repositories = repositories[:5]

    score_data = calculate_score(
        repositories=len(repositories),
        followers=user["followers"],
        stars=total_stars,
        recent_repositories=len(recent_repositories)
    )

    profile_data = {
        "username": user["login"],
        "name": user["name"],
        "avatar_url": user["avatar_url"],
        "bio": user["bio"],
        "company": user["company"],
        "location": user["location"],
        "blog": user["blog"],
        "public_repos": user["public_repos"],
        "followers": user["followers"],
        "following": user["following"],
        "created_at": user["created_at"]
    }

    return {
        "profile": profile_data,
        "repositories": repository_data,
        "languages": {
            "username": username,
            "total_repositories": len(repositories),
            "languages": language_data
        },
        "score": {
            "username": username,
            **score_data
        },
        "activity": {
            "username": username,
            **activity_data
        }
    }