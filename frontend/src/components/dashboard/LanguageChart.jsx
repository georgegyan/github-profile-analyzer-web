import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { CodeIcon } from '../common/icons'
import EmptyState from '../common/EmptyState'
import { CHART_PALETTE, toChartEntry } from '../../utils/formatters'

function normalizeLanguages(languages) {
  if (!languages) return []
  const raw = Array.isArray(languages) ? languages : Object.entries(languages).map(([name, value]) => ({ name, value }))
  return raw
    .map((item, i) => toChartEntry(item, i))
    .filter((entry) => entry.name)
    .sort((a, b) => b.value - a.value)
}

function CustomTooltip({ active, payload, total }) {
  if (!active || !payload?.length) return null
  const entry = payload[0]
  const pct = total ? Math.round((entry.value / total) * 100) : 0
  return (
    <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 shadow-[var(--shadow-card-hover)]">
      <p className="text-xs font-medium text-[var(--color-text)]">{entry.name}</p>
      <p className="font-mono text-xs text-[var(--color-text-muted)]">{entry.value} · {pct}%</p>
    </div>
  )
}

export default function LanguageChart({ languages }) {
  const data = normalizeLanguages(languages?.languages ?? languages)
  const total = data.reduce((sum, d) => sum + d.value, 0)

  return (
    <div className="h-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <h3 className="font-display text-sm font-semibold text-[var(--color-text)]">
        Language Distribution
      </h3>

      {data.length === 0 || total === 0 ? (
        <EmptyState
          icon={CodeIcon}
          title="No language data yet"
          description="We couldn't detect languages across this profile's repositories."
          className="mt-4"
        />
      ) : (
        <div className="mt-3 flex flex-col sm:flex-row items-center gap-6">
          <div className="h-48 w-48 shrink-0" role="img" aria-label={`Language distribution across ${data.length} languages`}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius="62%"
                  outerRadius="95%"
                  paddingAngle={data.length > 1 ? 2 : 0}
                  strokeWidth={0}
                  animationDuration={700}
                >
                  {data.map((entry, i) => (
                    <Cell key={entry.name} fill={CHART_PALETTE[i % CHART_PALETTE.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip total={total} />} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <ul className="w-full min-w-0 flex-1 space-y-2">
            {data.slice(0, 8).map((entry, i) => {
              const pct = total ? Math.round((entry.value / total) * 100) : 0
              return (
                <li key={entry.name} className="flex items-center justify-between gap-3 text-sm">
                  <span className="flex min-w-0 items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: CHART_PALETTE[i % CHART_PALETTE.length] }}
                    />
                    <span className="truncate text-[var(--color-text)]">{entry.name}</span>
                  </span>
                  <span className="shrink-0 font-mono text-xs tabular-nums text-[var(--color-text-muted)]">
                    {pct}%
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
