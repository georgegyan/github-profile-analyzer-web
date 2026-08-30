/** Truncates text to a max length, breaking on a word boundary where possible. */
export function truncateText(text, maxLength = 120) {
  if (!text) return ''
  if (text.length <= maxLength) return text
  const sliced = text.slice(0, maxLength)
  const lastSpace = sliced.lastIndexOf(' ')
  return `${sliced.slice(0, lastSpace > 40 ? lastSpace : maxLength).trim()}…`
}

/**
 * Converts an API/GitHub event type key into a human label.
 * "PushEvent" -> "Push Events", "pull_request" -> "Pull Requests"
 */
export function humanizeEventType(key) {
  if (!key) return 'Other'
  const withSpaces = key
    .replace(/Event$/, '')
    .replace(/_/g, ' ')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .trim()
  const words = withSpaces.split(/\s+/).filter(Boolean)
  const plural = words.map((w, i) =>
    i === words.length - 1 && !w.toLowerCase().endsWith('s') ? `${w}s` : w
  )
  return plural
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ')
}

/** Ordered, tasteful categorical palette shared across all charts. */
export const CHART_PALETTE = [
  'var(--color-accent)',
  'var(--color-amber)',
  'var(--color-green)',
  'var(--color-coral)',
  '#2AA6A0',
  '#8B6BE0',
  '#5C6470',
]

export function colorForIndex(index) {
  return CHART_PALETTE[index % CHART_PALETTE.length]
}

/** Normalizes a value that may be a plain string or an { name, value } style object. */
export function toChartEntry(item, index) {
  if (item && typeof item === 'object') {
    const name = item.name ?? item.language ?? item.type ?? item.label ?? `Item ${index + 1}`
    const value = item.value ?? item.count ?? item.percentage ?? item.repos ?? item.total ?? 0
    return { name, value: Number(value) || 0 }
  }
  return { name: String(item), value: 0 }
}
