/**
 * Formats a number for compact, readable display.
 * 950 -> "950", 1245 -> "1,245" (below threshold, comma form)
 * 12,400 -> "12.4K", 1,200,000 -> "1.2M"
 */
export function formatNumber(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) {
    return '0'
  }

  const num = Number(value)
  const abs = Math.abs(num)

  if (abs >= 1_000_000) {
    return trimTrailingZero(num / 1_000_000) + 'M'
  }
  if (abs >= 10_000) {
    return trimTrailingZero(num / 1_000) + 'K'
  }
  return num.toLocaleString('en-US')
}

function trimTrailingZero(value) {
  const rounded = Math.round(value * 10) / 10
  return rounded % 1 === 0 ? String(rounded) : rounded.toFixed(1)
}

/** Formats a plain integer with thousands separators, e.g. 1245 -> "1,245" */
export function formatInteger(value) {
  const num = Number(value)
  if (Number.isNaN(num)) return '0'
  return num.toLocaleString('en-US')
}
