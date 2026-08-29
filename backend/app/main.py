from fastapi import FastAPI  # type: ignore[import-not-found]

app = FastAPI(
    title="GitHub Profile Analyzer API",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "message": "GitHub Profile Analyzer API is running."
    }