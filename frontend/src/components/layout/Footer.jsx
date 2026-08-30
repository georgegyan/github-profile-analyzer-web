import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-display text-sm font-semibold text-[var(--color-text)]">
          <span className="flex h-5 w-5 items-center justify-center rounded-[5px] bg-[var(--color-text)] text-[var(--color-bg)]">
            <span className="font-mono text-[9px] leading-none">gh</span>
          </span>
          GitHub Profile Analyzer
        </div>
        <p className="text-xs text-[var(--color-text-faint)] text-center sm:text-right">
          Built on public GitHub data. Not affiliated with GitHub, Inc.
        </p>
        <nav className="flex items-center gap-5 text-xs text-[var(--color-text-muted)]" aria-label="Footer">
          <Link to="/" className="hover:text-[var(--color-text)] transition-colors">
            Home
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-[var(--color-text)] transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  )
}
