from collections import Counter

def analyze_languages(repositories: list):
    languages = []

    for repository in repositories:
        language = repository.get("language")

        if language:
            languages.append(language)

    language_counts = Counter(languages)

    total = len(languages)

    if total == 0:
        return []

    results = []

    for language, count in language_counts.items():
        percentage = (count / total) * 100

        results.append({
            "name": language,
            "repositories": count,
            "percentage": round(percentage, 2)
        })

    results.sort(
        key=lambda language: language["repositories"],
        reverse=True
    )

    return results