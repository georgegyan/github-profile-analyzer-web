import { Link } from 'react-router-dom'
import { CompassIcon } from '../components/common/icons'
import Button from '../components/common/Button'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center justify-center px-6 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent">
        <CompassIcon size={24} />
      </div>
      <p className="mt-6 font-mono text-sm text-text-faint">404</p>
      <h1 className="mt-2 font-display text-2xl font-semibold text-text">
        Looks like this page doesn&rsquo;t exist.
      </h1>
      <Button as={Link} to="/" variant="primary" className="mt-6">
        Back to Analyzer
      </Button>
    </div>
  )
}
