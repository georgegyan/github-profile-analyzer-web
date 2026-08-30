from app.services.github_services import get_user_repositories

def analyze_repositories(
    username: str,
    repositories: list
):

    formatted_repositories = []

    for repository in repositories:
        formatted_repositories.append({
            "name": repository["name"],
            "description": repository["description"],
            "stars": repository["stargazers_count"],
            "forks": repository["forks_count"],
            "language": repository["language"],
            "html_url": repository["html_url"]
        })

    total_stars = sum(
        repository["stargazers_count"]
        for repository in repositories
    )

    return {
        "username": username,
        "total_repositories": len(repositories),
        "total_stars": total_stars,
        "repositories": formatted_repositories
    }