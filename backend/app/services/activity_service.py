from collections import Counter


def analyze_activity(events: list):

    event_types = Counter()
    repositories = set()
    daily_activity = Counter()

    for event in events:

        event_type = event.get("type")

        if event_type:
            event_types[event_type] += 1

        repository = event.get("repo")

        if repository:
            repo_name = repository.get("name")

            if repo_name:
                repositories.add(repo_name)

        created_at = event.get("created_at")

        if created_at:
            date = created_at[:10]
            daily_activity[date] += 1

    formatted_event_types = []

    for event_type, count in event_types.items():
        formatted_event_types.append({
            "event_type": event_type,
            "count": count
        })

    formatted_event_types.sort(
        key=lambda event: event["count"],
        reverse=True
    )

    formatted_daily_activity = []

    for date, count in sorted(daily_activity.items()):
        formatted_daily_activity.append({
            "date": date,
            "count": count
        })

    return {
        "total_events": len(events),
        "active_repositories": len(repositories),
        "event_types": formatted_event_types,
        "daily_activity": formatted_daily_activity
    }