import { useEffect, useRef, useState } from 'react'
import { humanizeEventType } from '../../utils/formatters'

const RADIUS = 54
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

function scoreColor(score) {
  if (score >= 80) return 'var(--color-green)'
  if (score >= 50) return 'var(--color-amber)'
  return 'var(--color-coral)'
}

export default function DeveloperScore({ score }) {
  const target = Math.max(0, Math.min(100, Number(score?.score) || 0))
  const [display, setDisplay] = useState(0)
  const frame = useRef(null)

  useEffect(() => {
    const start = performance.now()
    const duration = 900

    function tick(now) {
      const elapsed = now - start
      const progress = Math.min(1, elapsed / duration)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * target))
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick)
      }
    }

    frame.current = requestAnimationFrame(tick)
    return () => frame.current && cancelAnimationFrame(frame.current)
  }, [target])

  if (!score) return null

  const offset = CIRCUMFERENCE * (1 - display / 100)
  const color = scoreColor(target)
  const breakdown = score.breakdown && typeof score.breakdown === 'object' ? score.breakdown : null

  return (
    <div className="h-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 flex flex-col items-center text-center">
      <h3 className="self-start font-display text-sm font-semibold text-[var(--color-text)]">
        Developer Score
      </h3>

      <div className="relative mt-2 flex h-36 w-36 items-center justify-center">
        <svg viewBox="0 0 128 128" className="h-full w-full -rotate-90 overflow-visible">
          <circle
            cx="64"
            cy="64"
            r={RADIUS}
            fill="none"
            stroke="var(--color-border)"
            strokeWidth="10"
          />
          <circle
            cx="64"
            cy="64"
            r={RADIUS}
            fill="none"
            stroke={color}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
            style={{ transition: 'stroke 300ms ease' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-mono text-3xl font-semibold tabular-nums text-[var(--color-text)]">
            {display}
          </span>
          <span className="text-[11px] text-[var(--color-text-faint)]">/ 100</span>
        </div>
      </div>

      {score.level ? (
        <span className="mt-3 inline-flex items-center rounded-full border border-[var(--color-border-strong)] px-3 py-1 text-xs font-medium text-[var(--color-text)]">
          {score.level}
        </span>
      ) : null}

      {breakdown ? (
        <dl className="mt-5 w-full space-y-2 text-left">
          {Object.entries(breakdown).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between text-xs">
              <dt className="text-[var(--color-text-muted)]">{humanizeEventType(key).replace(/s$/, '')}</dt>
              <dd className="font-mono tabular-nums text-[var(--color-text)]">{String(value)}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </div>
  )
}
