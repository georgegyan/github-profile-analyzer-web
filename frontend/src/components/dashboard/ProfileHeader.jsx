import { MapPinIcon, BuildingIcon, LinkIcon, CalendarIcon, ExternalLinkIcon } from '../common/icons'
import { formatJoinDate, formatAccountAge } from '../../utils/formatDate'

export default function ProfileHeader({ profile }) {
  if (!profile) return null

  const {
    username,
    name,
    avatar_url,
    bio,
    company,
    location,
    blog,
    created_at,
  } = profile

  const joinDate = formatJoinDate(created_at)
  const accountAge = formatAccountAge(created_at)
  const websiteUrl = blog && !/^https?:\/\//i.test(blog) ? `https://${blog}` : blog

  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-7 animate-fade-up">
      <div className="flex flex-col sm:flex-row gap-6">
        <img
          src={avatar_url}
          alt={`${name || username}'s GitHub avatar`}
          width={84}
          height={84}
          className="h-20 w-20 sm:h-[84px] sm:w-[84px] shrink-0 rounded-full border border-[var(--color-border)] object-cover"
          loading="eager"
        />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <h1 className="font-display text-xl sm:text-2xl font-semibold text-[var(--color-text)] truncate">
              {name || username}
            </h1>
            <span className="font-mono text-sm text-[var(--color-text-muted)]">@{username}</span>
          </div>

          {bio ? (
            <p className="mt-2 max-w-xl text-sm text-[var(--color-text-muted)]">{bio}</p>
          ) : null}

          <dl className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--color-text-muted)]">
            {location ? (
              <div className="flex items-center gap-1.5">
                <MapPinIcon size={14} className="text-[var(--color-text-faint)]" />
                <dt className="sr-only">Location</dt>
                <dd>{location}</dd>
              </div>
            ) : null}
            {company ? (
              <div className="flex items-center gap-1.5">
                <BuildingIcon size={14} className="text-[var(--color-text-faint)]" />
                <dt className="sr-only">Company</dt>
                <dd>{company}</dd>
              </div>
            ) : null}
            {websiteUrl ? (
              <div className="flex items-center gap-1.5">
                <LinkIcon size={14} className="text-[var(--color-text-faint)]" />
                <dt className="sr-only">Website</dt>
                <dd>
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-[var(--color-accent)] transition-colors"
                  >
                    {blog}
                  </a>
                </dd>
              </div>
            ) : null}
            {joinDate ? (
              <div className="flex items-center gap-1.5">
                <CalendarIcon size={14} className="text-[var(--color-text-faint)]" />
                <dt className="sr-only">Joined</dt>
                <dd>
                  Joined {joinDate}
                  {accountAge ? (
                    <span className="text-[var(--color-text-faint)]"> · {accountAge}</span>
                  ) : null}
                </dd>
              </div>
            ) : null}
          </dl>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-strong)] transition-colors"
          >
            View GitHub
            <ExternalLinkIcon size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}
