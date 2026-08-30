import { AlertIcon, SearchIcon } from './icons'
import Button from './Button'
import { Link } from 'react-router-dom'

const COPY = {
  not_found: {
    title: 'Profile not found',
    description: "We couldn't find a GitHub profile with that username.",
    icon: SearchIcon,
  },
  network: {
    title: 'Something went wrong',
    description: "We couldn't retrieve this profile right now. Please try again.",
    icon: AlertIcon,
  },
  server: {
    title: 'Something went wrong',
    description: "We couldn't retrieve this profile right now. Please try again.",
    icon: AlertIcon,
  },
  timeout: {
    title: 'This is taking too long',
    description: 'The request timed out. Please try again in a moment.',
    icon: AlertIcon,
  },
  unknown: {
    title: 'Something went wrong',
    description: "We couldn't retrieve this profile right now. Please try again.",
    icon: AlertIcon,
  },
}

export default function ErrorState({ type = 'unknown', onRetry }) {
  const copy = COPY[type] || COPY.unknown
  const Icon = copy.icon

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-6 py-16 text-center">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-coral-soft)] text-[var(--color-coral)]">
        <Icon size={24} />
      </div>
      <h2 className="font-display text-xl font-semibold text-[var(--color-text)]">
        {copy.title}
      </h2>
      <p className="mt-2 max-w-sm text-sm text-[var(--color-text-muted)]">
        {copy.description}
      </p>
      <div className="mt-6 flex items-center gap-3">
        {onRetry ? (
          <Button variant="accent" size="sm" onClick={onRetry}>
            Try again
          </Button>
        ) : null}
        <Button as={Link} to="/" variant="secondary" size="sm">
          Back to Search
        </Button>
      </div>
    </div>
  )
}
