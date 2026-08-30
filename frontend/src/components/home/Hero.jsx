import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'

const COLS = 26
const ROWS = 7
const LEVELS = ['bg-[var(--color-border)]', 'bg-[var(--color-green-soft)]', 'bg-[var(--color-green)]/40', 'bg-[var(--color-green)]/70', 'bg-[var(--color-green)]']

function useContributionTexture() {
  return useMemo(() => {
    const cells = []
    for (let i = 0; i < COLS * ROWS; i++) {
      // Deterministic pseudo-random so it doesn't reshuffle on re-render.
      const seed = Math.sin(i * 12.9898) * 43758.5453
      const rand = seed - Math.floor(seed)
      const level = rand > 0.82 ? 4 : rand > 0.65 ? 3 : rand > 0.45 ? 2 : rand > 0.28 ? 1 : 0
      cells.push(level)
    }
    return cells
  }, [])
}

export default function Hero() {
  const navigate = useNavigate()
  const cells = useContributionTexture()

  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 flex justify-center opacity-[0.55] [mask-image:linear-gradient(to_bottom,black,transparent_85%)] dark:opacity-40"
      >
        <div
          className="grid gap-[3px] pt-10"
          style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
        >
          {cells.map((level, i) => (
            <span
              key={i}
              className={`h-2.5 w-2.5 rounded-[2px] ${LEVELS[level]}`}
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 pt-20 pb-16 sm:pt-28 sm:pb-20 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-3 py-1 text-xs font-mono text-[var(--color-text-muted)] animate-fade-up">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)]" />
          live · public GitHub data
        </span>

        <h1 className="mt-5 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--color-text)] animate-fade-up [animation-delay:60ms]">
          Understand Your GitHub Profile.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-[var(--color-text-muted)] animate-fade-up [animation-delay:120ms]">
          Analyze repositories, languages, activity, and developer metrics from a single dashboard.
        </p>

        <div className="mx-auto mt-8 max-w-xl animate-fade-up [animation-delay:180ms]">
          <SearchBar id="search-bar" size="lg" autoFocus />
          <button
            type="button"
            onClick={() => navigate('/dashboard/georgegyan')}
            className="mt-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            Try:{' '}
            <span className="font-mono text-[var(--color-accent)] underline decoration-dotted underline-offset-4">
              georgegyan
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
