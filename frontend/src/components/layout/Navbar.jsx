import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import ThemeToggle from '../common/ThemeToggle'
import { MenuIcon, CloseIcon, SearchIcon } from '../common/icons'
import { useTheme } from '../../hooks/useTheme'

const NAV_LINK_CLASS = ({ isActive }) =>
  `text-sm font-medium transition-colors ${
    isActive
      ? 'text-[var(--color-text)]'
      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
  }`

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  const goToAnalyze = () => {
    setMobileOpen(false)
    navigate('/')
    requestAnimationFrame(() => {
      document.getElementById('search-bar')?.focus()
    })
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-bg)]/70">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-[15px] font-semibold tracking-tight text-[var(--color-text)]"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-[6px] bg-[var(--color-text)] text-[var(--color-bg)]">
            <span className="font-mono text-[11px] leading-none">gh</span>
          </span>
          GitHub Profile Analyzer
        </Link>

        <nav className="hidden items-center gap-6 sm:flex" aria-label="Primary">
          <NavLink to="/" end className={NAV_LINK_CLASS}>
            Home
          </NavLink>
          <button
            type="button"
            onClick={goToAnalyze}
            className="text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
          >
            Analyze
          </button>
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>

        <div className="flex items-center gap-1.5 sm:hidden">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-text-muted)]"
          >
            {mobileOpen ? <CloseIcon size={16} /> : <MenuIcon size={16} />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav
          className="sm:hidden border-t border-[var(--color-border)] px-4 py-3 space-y-1"
          aria-label="Mobile"
        >
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-surface-hover)]"
          >
            Home
          </Link>
          <button
            type="button"
            onClick={goToAnalyze}
            className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-surface-hover)]"
          >
            <SearchIcon size={15} />
            Analyze
          </button>
        </nav>
      ) : null}
    </header>
  )
}
