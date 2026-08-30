import { useMemo, useState } from 'react'
import RepositoryCard from './RepositoryCard'
import EmptyState from '../common/EmptyState'
import Button from '../common/Button'
import { RepoIcon } from '../common/icons'

const INITIAL_COUNT = 6

export default function RepositoryList({ repositories }) {
  const [showAll, setShowAll] = useState(false)

  const sorted = useMemo(
    () => [...(repositories || [])].sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0)),
    [repositories]
  )

  if (!sorted.length) {
    return (
      <EmptyState
        icon={RepoIcon}
        title="No public repositories"
        description="This profile doesn't have any public repositories yet."
      />
    )
  }

  const visible = showAll ? sorted : sorted.slice(0, INITIAL_COUNT)

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {visible.map((repo, i) => (
          <div key={repo.html_url || repo.name} className="animate-fade-up" style={{ animationDelay: `${Math.min(i, 6) * 40}ms` }}>
            <RepositoryCard repo={repo} />
          </div>
        ))}
      </div>

      {sorted.length > INITIAL_COUNT ? (
        <div className="mt-6 flex justify-center">
          <Button variant="secondary" size="sm" onClick={() => setShowAll((v) => !v)}>
            {showAll ? 'Show fewer repositories' : `View all ${sorted.length} repositories`}
          </Button>
        </div>
      ) : null}
    </div>
  )
}
