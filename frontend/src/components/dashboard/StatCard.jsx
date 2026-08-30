import { formatNumber } from '../../utils/formatNumber'

export default function StatCard({ icon: Icon, label, value, hint }) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-shadow hover:shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-2 text-[var(--color-text-muted)]">
        {Icon ? <Icon size={15} /> : null}
        <span className="text-xs font-medium uppercase tracking-wide">{label}</span>
      </div>
      <p className="mt-2 font-mono text-2xl font-semibold tabular-nums text-[var(--color-text)]">
        {typeof value === 'number' ? formatNumber(value) : value}
      </p>
      {hint ? <p className="mt-1 text-xs text-[var(--color-text-faint)]">{hint}</p> : null}
    </div>
  )
}
