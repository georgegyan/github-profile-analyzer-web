import requests

GITHUB_API_BASE_URL = "https://api.github.com"

class GitHubAPIError(Exception):
    pass

def github_get(endpoint: str, params: dict | None = None):
    url = f"{GITHUB_API_BASE_URL}{endpoint}"

    try:
        response = requests.get(
            url,
            params=params,
            timeout=10
        )
    except requests.RequestException as error:
        raise GitHubAPIError(
            "Unable to connect to GitHub"
        ) from error

    if response.status_code == 404:
        raise GitHubAPIError(
            "GitHub resource not found"
        )

    if response.status_code == 403:
        raise GitHubAPIError(
            "GitHub API rate limit exceeded"
        )

    if response.status_code != 200:
        raise GitHubAPIError(
            "GitHub API request failed"
        )

    return response.json()