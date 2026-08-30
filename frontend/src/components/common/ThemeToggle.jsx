import { SunIcon, MoonIcon } from './icons'

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="relative inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-text-muted hover:text-text hover:bg-surface-hover transition-colors"
    >
      {isDark ? <SunIcon size={16} /> : <MoonIcon size={16} />}
    </button>
  )
}
