import { UsersIcon, RepoIcon, CodeIcon, GaugeIcon, ActivityIcon } from '../common/icons'

const FEATURES = [
  {
    icon: UsersIcon,
    title: 'Profile Analytics',
    description: 'Followers, following, and account history summarized at a glance.',
  },
  {
    icon: RepoIcon,
    title: 'Repository Insights',
    description: 'Stars, forks, and descriptions across every public repository.',
  },
  {
    icon: CodeIcon,
    title: 'Language Analysis',
    description: 'A breakdown of the languages used across a profile\u2019s repositories.',
  },
  {
    icon: GaugeIcon,
    title: 'Developer Score',
    description: 'A single composite score that summarizes overall GitHub activity.',
  },
  {
    icon: ActivityIcon,
    title: 'Activity Tracking',
    description: 'Recent events and daily activity, visualized over time.',
  },
]

const STEPS = [
  { label: 'Enter a GitHub username' },
  { label: 'Analyze the profile' },
  { label: 'Explore the developer insights' },
]

export default function FeatureGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-xl">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-text)]">
          Everything a profile has to say
        </h2>
        <p className="mt-3 text-[var(--color-text-muted)]">
          One dashboard, built from public GitHub data, covering the metrics that
          actually describe how a developer works.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-card-hover)]"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
              <Icon size={18} />
            </div>
            <h3 className="mt-4 font-display text-[15px] font-semibold text-[var(--color-text)]">
              {title}
            </h3>
            <p className="mt-1.5 text-sm text-[var(--color-text-muted)]">{description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
        <h3 className="font-display text-lg font-semibold text-[var(--color-text)]">
          How it works
        </h3>
        <ol className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <li key={step.label} className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-strong)] font-mono text-xs text-[var(--color-text-muted)]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-sm text-[var(--color-text)] pt-1">{step.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
