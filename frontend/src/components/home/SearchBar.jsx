import { forwardRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchIcon } from '../common/icons'

const USERNAME_PATTERN = /^[A-Za-z0-9](?:[A-Za-z0-9]|-(?=[A-Za-z0-9])){0,38}$/

function validateUsername(raw) {
  const value = raw.trim()
  if (!value) return { valid: false, message: 'Enter a GitHub username to continue.' }
  if (!USERNAME_PATTERN.test(value)) {
    return {
      valid: false,
      message: 'That doesn\u2019t look like a valid GitHub username.',
    }
  }
  return { valid: true, value }
}

/**
 * Reusable username search input. Used on the Home hero (large) and the
 * Dashboard header (compact) via the `size` prop.
 */
const SearchBar = forwardRef(function SearchBar(
  { size = 'lg', placeholder = 'Enter GitHub username...', autoFocus = false, id = 'search-bar' },
  ref
) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)
  const [isNavigating, setIsNavigating] = useState(false)
  const navigate = useNavigate()

  const submit = (raw) => {
    const result = validateUsername(raw)
    if (!result.valid) {
      setError(result.message)
      return
    }
    setError(null)
    setIsNavigating(true)
    navigate(`/dashboard/${result.value}`)
    // Release the disabled state on the next tick; a real navigation will
    // unmount this component anyway, but this keeps behavior sane if not.
    setTimeout(() => setIsNavigating(false), 400)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    submit(value)
  }

  const isLarge = size === 'lg'

  return (
    <form onSubmit={handleSubmit} className="w-full" noValidate>
      <div
        className={`flex flex-col sm:flex-row items-stretch gap-2 ${
          isLarge ? '' : 'sm:gap-2'
        }`}
      >
        <div className="relative flex-1">
          <SearchIcon
            size={isLarge ? 18 : 16}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-text-faint"
          />
          <label htmlFor={id} className="sr-only">
            GitHub username
          </label>
          <input
            id={id}
            ref={ref}
            type="text"
            inputMode="text"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            autoFocus={autoFocus}
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
              if (error) setError(null)
            }}
            placeholder={placeholder}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${id}-error` : undefined}
            className={`w-full rounded-lg border bg-surface py-3 pl-10 pr-3 text-text placeholder:text-text-faint transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40 ${
              isLarge ? 'text-base' : 'text-sm py-2.5'
            } ${error ? 'border-coral' : 'border-border-strong'}`}
          />
        </div>
        <button
          type="submit"
          disabled={isNavigating}
          className={`inline-flex items-center justify-center gap-2 rounded-lg bg-text font-medium text-bg transition-opacity hover:opacity-90 active:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed ${
            isLarge ? 'px-6 py-3 text-base' : 'px-4 py-2.5 text-sm'
          }`}
        >
          {isNavigating ? 'Analyzing…' : 'Analyze Profile'}
        </button>
      </div>
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-coral">
          {error}
        </p>
      ) : null}
    </form>
  )
})

export default SearchBar
