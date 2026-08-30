function Block({ className = '' }) {
  return (
    <div
      className={`animate-pulse-soft rounded-md bg-[var(--color-surface-hover)] ${className}`}
    />
  )
}

function SkeletonCard({ className = '' }) {
  return (
    <div
      className={`rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 ${className}`}
    >
      <Block className="h-3 w-20 mb-3" />
      <Block className="h-6 w-16" />
    </div>
  )
}

/** Full dashboard skeleton: mirrors the real layout so the page doesn't jump. */
export default function LoadingState() {
  return (
    <div
      className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-8 space-y-8"
      role="status"
      aria-live="polite"
      aria-label="Loading dashboard"
    >
      {/* Profile skeleton */}
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 flex flex-col sm:flex-row gap-5">
        <Block className="h-20 w-20 rounded-full shrink-0" />
        <div className="flex-1 space-y-3">
          <Block className="h-5 w-40" />
          <Block className="h-3 w-24" />
          <Block className="h-3 w-full max-w-md" />
          <div className="flex gap-3 pt-1">
            <Block className="h-3 w-20" />
            <Block className="h-3 w-20" />
            <Block className="h-3 w-20" />
          </div>
        </div>
      </div>

      {/* Stats skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>

      {/* Score + chart skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 flex flex-col items-center justify-center">
          <Block className="h-32 w-32 rounded-full" />
          <Block className="h-3 w-24 mt-4" />
        </div>
        <div className="lg:col-span-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
          <Block className="h-3 w-32 mb-5" />
          <Block className="h-48 w-full" />
        </div>
      </div>

      {/* Activity chart skeleton */}
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
        <Block className="h-3 w-32 mb-5" />
        <Block className="h-56 w-full" />
      </div>

      {/* Repository skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 space-y-3"
          >
            <Block className="h-4 w-32" />
            <Block className="h-3 w-full" />
            <Block className="h-3 w-2/3" />
            <div className="flex gap-3 pt-1">
              <Block className="h-3 w-10" />
              <Block className="h-3 w-10" />
              <Block className="h-3 w-14" />
            </div>
          </div>
        ))}
      </div>
      <span className="sr-only">Loading dashboard…</span>
    </div>
  )
}
