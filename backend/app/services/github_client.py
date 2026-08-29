import requests

from app.config import GITHUB_TOKEN


GITHUB_API_BASE_URL = "https://api.github.com"


class GitHubAPIError(Exception):
    pass


def github_get(
    endpoint: str,
    params: dict | None = None
):
    url = f"{GITHUB_API_BASE_URL}{endpoint}"

    headers = {
        "Accept": "application/vnd.github+json",
        "User-Agent": "GitHub-Profile-Analyzer"
    }

    if GITHUB_TOKEN:
        headers["Authorization"] = f"Bearer {GITHUB_TOKEN}"

    try:
        response = requests.get(
            url,
            params=params,
            headers=headers,
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
             "GitHub API request was forbidden. "
            "You may have reached the rate limit."
        )

    if response.status_code != 200:
        raise GitHubAPIError(
            "GitHub API request failed"
        )

    return response.json()