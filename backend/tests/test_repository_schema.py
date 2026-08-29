from app.schemas.repository_schema import RepositoryAnalytics


def test_repository_analytics_model_has_expected_fields():
    model = RepositoryAnalytics.model_validate({
        "username": "octocat",
        "total_repositories": 2,
        "total_stars": 10,
        "repositories": [
            {
                "name": "demo",
                "description": "example repo",
                "stars": 5,
                "forks": 1,
                "language": "Python",
                "html_url": "https://example.com/demo"
            }
        ]
    })

    assert model.username == "octocat"
    assert model.total_repositories == 2
    assert model.total_stars == 10
    assert len(model.repositories) == 1
