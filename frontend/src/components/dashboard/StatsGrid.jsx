import StatCard from './StatCard'
import { RepoIcon, UsersIcon, UserPlusIcon, StarIcon } from '../common/icons'

export default function StatsGrid({ profile, totalStars }) {
  const stats = [
    { icon: RepoIcon, label: 'Public Repositories', value: profile?.public_repos ?? 0 },
    { icon: UsersIcon, label: 'Followers', value: profile?.followers ?? 0 },
    { icon: UserPlusIcon, label: 'Following', value: profile?.following ?? 0 },
    { icon: StarIcon, label: 'Total Stars', value: totalStars ?? 0 },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className="animate-fade-up"
          style={{ animationDelay: `${i * 40}ms` }}
        >
          <StatCard {...stat} />
        </div>
      ))}
    </div>
  )
}
