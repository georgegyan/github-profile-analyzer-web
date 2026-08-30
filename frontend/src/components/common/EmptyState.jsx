export default function EmptyState({ icon: IconCmp, title, description, className = '' }) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center py-10 px-6 rounded-lg border border-dashed border-[var(--color-border-strong)] ${className}`}
    >
      {IconCmp ? (
        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-surface-hover)] text-[var(--color-text-faint)]">
          <IconCmp size={17} />
        </div>
      ) : null}
      <p className="font-display text-sm font-semibold text-[var(--color-text)]">{title}</p>
      {description ? (
        <p className="mt-1 text-sm text-[var(--color-text-muted)] max-w-xs">{description}</p>
      ) : null}
    </div>
  )
}
