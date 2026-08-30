import { useParams } from 'react-router-dom'
import { useDashboard } from '../hooks/useDashboard'
import LoadingState from '../components/common/LoadingState'
import ErrorState from '../components/common/ErrorState'
import SearchBar from '../components/home/SearchBar'
import ProfileHeader from '../components/dashboard/ProfileHeader'
import StatsGrid from '../components/dashboard/StatsGrid'
import DeveloperScore from '../components/dashboard/DeveloperScore'
import LanguageChart from '../components/dashboard/LanguageChart'
import ActivitySummary from '../components/dashboard/ActivitySummary'
import RepositoryList from '../components/dashboard/RepositoryList'

export default function Dashboard() {
  const { username } = useParams()
  const { status, data, error } = useDashboard(username)

  return (
    <div>
      <div className="border-b border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          <div>
            <p className="font-display text-sm font-semibold text-text whitespace-nowrap">
              Devlytic
            </p>
          </div>
          <div className="flex-1 sm:max-w-sm ml-auto">
            <SearchBar id="dashboard-search" size="sm" placeholder="Search another GitHub username..." />
          </div>
        </div>
      </div>

      {status === 'loading' || status === 'idle' ? <LoadingState /> : null}

      {status === 'error' ? (
        <ErrorState type={error?.type} onRetry={() => window.location.reload()} />
      ) : null}

      {status === 'success' && data ? (
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-8 space-y-6">
          <ProfileHeader profile={data.profile} />

          <StatsGrid
            profile={data.profile}
            totalStars={data.repositories?.total_stars}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <DeveloperScore score={data.score} />
            <div className="lg:col-span-2">
              <LanguageChart languages={data.languages} />
            </div>
          </div>

          <ActivitySummary activity={data.activity} />

          <div>
            <h2 className="mb-4 font-display text-lg font-semibold text-text">
              Repositories
            </h2>
            <RepositoryList repositories={data.repositories?.repositories} />
          </div>
        </div>
      ) : null}
    </div>
  )
}
