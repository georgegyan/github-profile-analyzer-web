const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

/** "2023-01-15T00:00:00Z" -> "January 2023" */
export function formatJoinDate(isoString) {
  if (!isoString) return null
  const date = new Date(isoString)
  if (Number.isNaN(date.getTime())) return null
  return `${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`
}

/** "2023-01-15T00:00:00Z" -> "3 years, 4 months" (relative to now) */
export function formatAccountAge(isoString) {
  if (!isoString) return null
  const created = new Date(isoString)
  if (Number.isNaN(created.getTime())) return null

  const now = new Date()
  let years = now.getUTCFullYear() - created.getUTCFullYear()
  let months = now.getUTCMonth() - created.getUTCMonth()
  if (now.getUTCDate() < created.getUTCDate()) {
    months -= 1
  }
  if (months < 0) {
    years -= 1
    months += 12
  }

  if (years <= 0 && months <= 0) return 'Less than a month'

  const parts = []
  if (years > 0) parts.push(`${years} ${years === 1 ? 'year' : 'years'}`)
  if (months > 0) parts.push(`${months} ${months === 1 ? 'month' : 'months'}`)
  return parts.join(', ')
}

/** "2024-05-01T12:00:00Z" -> "May 1" (short label for chart axes) */
export function formatShortDate(isoString) {
  const date = new Date(isoString)
  if (Number.isNaN(date.getTime())) return isoString
  return `${MONTHS[date.getUTCMonth()].slice(0, 3)} ${date.getUTCDate()}`
}
