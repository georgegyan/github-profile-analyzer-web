import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-display text-sm font-semibold text-text">
          <span className="flex h-5 w-5 items-center justify-center rounded-[5px] bg-text text-bg">
            <span className="font-mono text-[9px] leading-none">dg</span>
          </span>
          Devlytic GitHub Analyzer
        </div>
        <p className="text-xs text-text-faint text-center sm:text-right">
          Built on public GitHub data. Not affiliated with GitHub, Inc.
        </p>
        <nav className="flex items-center gap-5 text-xs text-text-muted" aria-label="Footer">
          <Link to="/" className="hover:text-text transition-colors">
            Home
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-text transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  )
}
