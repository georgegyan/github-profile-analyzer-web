# GitHub Profile Analyzer — Frontend

A React + Vite frontend for the GitHub Profile Analyzer. Enter any GitHub
username to see a full analytics dashboard: profile stats, developer score,
language distribution, activity trends, and top repositories.

## Stack

React · Vite · JavaScript · Tailwind CSS v4 · Axios · React Router · Recharts

## Getting started

```bash
pnpm install
pnpm dev
```

The app expects a FastAPI backend running at the URL in `.env`
(`VITE_API_BASE_URL`, defaults to `http://127.0.0.1:8000`) exposing:

```
GET /api/users/{username}/dashboard
```

returning `{ profile, repositories, languages, score, activity }`.

## Scripts

```bash
pnpm dev      # start the dev server
pnpm build    # production build to dist/
pnpm preview  # preview the production build locally
pnpm lint     # run oxlint
```

## Environment

Copy `.env.example` to `.env` and point `VITE_API_BASE_URL` at your backend.
Never put secrets in `VITE_*` variables — they're exposed to the browser.

## Project structure

```
src/
├── components/
│   ├── layout/      Navbar, Footer, MainLayout
│   ├── home/        Hero, SearchBar, FeatureGrid
│   ├── dashboard/   Profile, stats, score, charts, repository cards
│   └── common/      Button, LoadingState, ErrorState, EmptyState, ThemeToggle, icons
├── pages/           Home, Dashboard, NotFound
├── services/        api.js (Axios + error normalization), githubApi.js
├── hooks/           useDashboard, useTheme
└── utils/           formatNumber, formatDate, formatters
```
