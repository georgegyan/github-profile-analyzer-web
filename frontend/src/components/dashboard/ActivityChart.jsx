import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'
import { ActivityIcon } from '../common/icons'
import EmptyState from '../common/EmptyState'
import { formatShortDate } from '../../utils/formatDate'

const DATE_KEYS = ['date', 'day', 'timestamp', 'created_at']
const COUNT_KEYS = ['count', 'events', 'total', 'value', 'activity']

function normalizeDailyActivity(daily) {
  if (!Array.isArray(daily)) return []
  const dateKey = DATE_KEYS.find((k) => daily[0] && k in daily[0])
  const countKey = COUNT_KEYS.find((k) => daily[0] && k in daily[0])
  if (!dateKey || !countKey) return []

  return daily.map((item) => ({
    date: item[dateKey],
    label: formatShortDate(item[dateKey]),
    count: Number(item[countKey]) || 0,
  }))
}

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 shadow-[var(--shadow-card-hover)]">
      <p className="text-xs text-[var(--color-text-muted)]">{label}</p>
      <p className="font-mono text-xs font-medium text-[var(--color-text)]">
        {payload[0].value} events
      </p>
    </div>
  )
}

export default function ActivityChart({ dailyActivity }) {
  const data = normalizeDailyActivity(dailyActivity)

  if (data.length === 0) {
    return (
      <EmptyState
        icon={ActivityIcon}
        title="No recent activity"
        description="This profile doesn't have recent public activity to chart."
      />
    )
  }

  return (
    <div className="h-56 w-full" role="img" aria-label="Daily activity over the recent period">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
          <defs>
            <linearGradient id="activityFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity={0.35} />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="var(--color-border)" vertical={false} />
          <XAxis
            dataKey="label"
            tick={{ fill: 'var(--color-text-faint)', fontSize: 11 }}
            axisLine={{ stroke: 'var(--color-border)' }}
            tickLine={false}
            interval="preserveStartEnd"
            minTickGap={24}
          />
          <YAxis
            tick={{ fill: 'var(--color-text-faint)', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            width={28}
            allowDecimals={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'var(--color-border-strong)' }} />
          <Area
            type="monotone"
            dataKey="count"
            stroke="var(--color-accent)"
            strokeWidth={2}
            fill="url(#activityFill)"
            animationDuration={700}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
