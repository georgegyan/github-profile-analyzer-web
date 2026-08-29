def calculate_score(
    repositories: int,
    followers: int,
    stars: int,
    recent_repositories: int
):
    repository_score = min(repositories * 2, 100)

    follower_score = min(followers / 10, 100)

    star_score = min(stars / 2, 100)

    activity_score = min(recent_repositories * 10, 100)

    total_score = (
        repository_score * 0.25
        + follower_score * 0.25
        + star_score * 0.25
        + activity_score * 0.25
    )

    score = round(total_score)

    level = get_developer_level(score)

    return {
        "score": score,
        "level": level,
        "breakdown": {
            "repository_score": round(repository_score),
            "follower_score": round(follower_score),
            "star_score": round(star_score),
            "activity_score": round(activity_score)
        }
    }


def get_developer_level(score: int):
    if score >= 80:
        return "Advanced Developer"

    if score >= 60:
        return "Intermediate Developer"

    if score >= 40:
        return "Developing Developer"

    return "Beginner Developer"