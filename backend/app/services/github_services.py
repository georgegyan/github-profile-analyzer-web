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