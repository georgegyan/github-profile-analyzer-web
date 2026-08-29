import requests

GITHUB_API_URL = "https://api.github.com/users"

def get_user_profile(username: str):
    url = f"{GITHUB_API_URL}/{username}"

    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        return None
    
    return response.json()

def get_user_repositories(username: str):
    url = f"{GITHUB_API_URL}/{username}/repos"

    params = {
        "per_page": 100,
        "sort": "updated"
    }

    response = requests.get(url, params=params)

    if response.status_code != 200:
        return None

    return response.json()