import EmptyState from '../common/EmptyState'
import { ActivityIcon } from '../common/icons'
import { CHART_PALETTE, humanizeEventType, toChartEntry } from '../../utils/formatters'

function normalizeEventTypes(eventTypes) {
  if (!eventTypes) return []
  const raw = Array.isArray(eventTypes)
    ? eventTypes
    : Object.entries(eventTypes).map(([name, value]) => ({ name, value }))
  return raw
    .map((item, i) => toChartEntry(item, i))
    .filter((entry) => entry.name)
    .sort((a, b) => b.value - a.value)
}

export default function EventBreakdown({ eventTypes }) {
  const data = normalizeEventTypes(eventTypes)
  const max = data.length ? data[0].value : 0

  if (data.length === 0) {
    return (
      <EmptyState
        icon={ActivityIcon}
        title="No events to break down"
        description="Event-type activity will appear here once available."
      />
    )
  }

  return (
    <div>
      <h4 className="text-xs font-medium uppercase tracking-wide text-[var(--color-text-muted)]">
        Event breakdown
      </h4>
      <ul className="mt-3 space-y-3">
        {data.slice(0, 6).map((entry, i) => {
          const width = max ? Math.max(4, Math.round((entry.value / max) * 100)) : 0
          return (
            <li key={entry.name}>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[var(--color-text)]">{humanizeEventType(entry.name)}</span>
                <span className="font-mono text-xs tabular-nums text-[var(--color-text-muted)]">
                  {entry.value}
                </span>
              </div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-surface-hover)]">
                <div
                  className="h-full rounded-full transition-[width] duration-700 ease-out"
                  style={{ width: `${width}%`, backgroundColor: CHART_PALETTE[i % CHART_PALETTE.length] }}
                />
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
