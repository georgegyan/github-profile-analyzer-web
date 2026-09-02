# GitHub Profile Analyzer (Devlytic)

GitHub Profile Analyzer is a full-stack web application that turns a GitHub
username into an interactive developer analytics dashboard. It combines GitHub
profile data, repository metrics, language distribution, activity trends, and a
calculated developer score in one view.

## Features

- Search for any public GitHub username
- View profile information, followers, following, and public repositories
- Analyze repository stars, forks, languages, and descriptions
- Visualize language distribution and recent GitHub activity
- Display a calculated developer score
- Responsive React interface with light and dark themes
- Loading, empty, not-found, and server-error states

## Technology Stack

### Frontend

- React 19
- Vite
- Tailwind CSS 4
- Axios
- React Router
- Recharts

### Backend

- Python
- FastAPI
- Pydantic
- Requests
- Uvicorn
- GitHub REST API

## Project Structure

```text
backend/
	app/
		main.py                 FastAPI application and CORS configuration
		routers/                API route handlers
		schemas/                Pydantic response models
		services/               GitHub client and analytics logic
frontend/
	src/
		components/             Shared, home, dashboard, and layout components
		hooks/                  Dashboard and theme hooks
		pages/                  Home, dashboard, and not-found pages
		services/               Axios API clients
		utils/                  Formatting helpers
```

## Requirements

- Python 3.10 or newer
- Node.js 18 or newer
- pnpm
- A GitHub personal access token is recommended for higher API rate limits

## Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd github-profile-analyzer-web
```

### 2. Configure the backend

Create and activate a virtual environment from the repository root:

```powershell
python -m venv .venv
\.venv\Scripts\Activate.ps1
```

Install the backend dependencies:

```powershell
cd backend
pip install -r requirements.txt
```

Create a `backend/.env` file and add your GitHub token:

```env
GITHUB_TOKEN=your_github_token
```

The token is optional for basic public-data requests, but authenticated GitHub
requests have a higher rate limit. Never expose this token in frontend code or
in a `VITE_*` variable.

### 3. Configure the frontend

In a second terminal, install the frontend dependencies:

```powershell
cd frontend
pnpm install
```

The frontend defaults to `http://127.0.0.1:8000`. To use another backend URL,
create `frontend/.env`:

```env
VITE_API_BASE_URL=http://127.0.0.1:8000
```

## Running Locally

Start the backend from the repository root:

```powershell
\.venv\Scripts\python.exe -m uvicorn app.main:app --reload --port 8000 --app-dir backend
```

Start the frontend in a second terminal:

```powershell
cd frontend
pnpm dev
```

Open `http://localhost:5173` in a browser and search for a GitHub username.

The backend also provides interactive API documentation at:

- `http://127.0.0.1:8000/docs`
- `http://127.0.0.1:8000/redoc`

## API

The primary dashboard endpoint is:

```http
GET /api/users/{username}/dashboard
```

The response contains these sections:

```json
{
	"profile": {},
	"repositories": {},
	"languages": {},
	"score": {},
	"activity": {}
}
```

Additional backend routes are available for individual analyses:

```text
GET /api/users/{username}
GET /api/users/{username}/repos
GET /api/users/{username}/languages
GET /api/users/{username}/score
GET /api/users/{username}/activity
```

## Frontend Commands

Run these commands from `frontend/`:

```bash
pnpm dev      # Start the Vite development server
pnpm build    # Build the production bundle in dist/
pnpm preview  # Preview the production build
pnpm lint     # Run oxlint
```
## License

This project is licensed under the terms in [LICENSE](LICENSE).

