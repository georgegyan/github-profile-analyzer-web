import { StarIcon, ForkIcon, ExternalLinkIcon } from '../common/icons'
import { formatNumber } from '../../utils/formatNumber'
import { truncateText } from '../../utils/formatters'

export default function RepositoryCard({ repo }) {
  const { name, description, stars, forks, language, html_url } = repo

  return (
    <a
      href={html_url}
      target="_blank"
      rel="noreferrer noopener"
      className="group flex h-full flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-card-hover)]"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="min-w-0 truncate font-display text-[15px] font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
          {name}
        </h3>
        <ExternalLinkIcon
          size={14}
          className="mt-0.5 shrink-0 text-[var(--color-text-faint)] opacity-0 transition-opacity group-hover:opacity-100"
        />
      </div>

      <p className="mt-1.5 flex-1 text-sm text-[var(--color-text-muted)]">
        {description ? truncateText(description, 110) : 'No description provided.'}
      </p>

      <div className="mt-4 flex items-center gap-4 text-xs text-[var(--color-text-muted)]">
        {language ? (
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            {language}
          </span>
        ) : null}
        <span className="flex items-center gap-1">
          <StarIcon size={13} />
          {formatNumber(stars ?? 0)}
        </span>
        <span className="flex items-center gap-1">
          <ForkIcon size={13} />
          {formatNumber(forks ?? 0)}
        </span>
      </div>
    </a>
  )
}
