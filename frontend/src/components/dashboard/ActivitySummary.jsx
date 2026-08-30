import { ActivityIcon, RepoIcon } from '../common/icons'
import ActivityChart from './ActivityChart'
import EventBreakdown from './EventBreakdown'
import { formatNumber } from '../../utils/formatNumber'

export default function ActivitySummary({ activity }) {
  if (!activity) return null

  const { total_events, active_repositories, event_types, daily_activity } = activity

  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h3 className="font-display text-sm font-semibold text-[var(--color-text)]">
          Activity
        </h3>
        <div className="flex items-center gap-5 text-sm">
          <span className="flex items-center gap-1.5 text-[var(--color-text-muted)]">
            <ActivityIcon size={14} />
            <span className="font-mono font-medium text-[var(--color-text)]">
              {formatNumber(total_events ?? 0)}
            </span>
            total events
          </span>
          <span className="flex items-center gap-1.5 text-[var(--color-text-muted)]">
            <RepoIcon size={14} />
            <span className="font-mono font-medium text-[var(--color-text)]">
              {formatNumber(active_repositories ?? 0)}
            </span>
            active repos
          </span>
        </div>
      </div>

      <div className="mt-5">
        <ActivityChart dailyActivity={daily_activity} />
      </div>

      {event_types ? (
        <div className="mt-6 border-t border-[var(--color-border)] pt-5">
          <EventBreakdown eventTypes={event_types} />
        </div>
      ) : null}
    </div>
  )
}
