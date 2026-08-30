import { useEffect, useRef, useState } from 'react'
import { githubApi } from '../services/githubApi'
import { ApiError } from '../services/api'

/**
 * Fetches the full dashboard payload for a username exactly once per
 * username change, and exposes a clean { data, status, error } shape.
 * status: 'idle' | 'loading' | 'success' | 'error'
 */
export function useDashboard(username) {
  const [state, setState] = useState({ status: 'idle', data: null, error: null })
  const requestId = useRef(0)

  useEffect(() => {
    if (!username) {
      setState((prev) =>
        prev.status === 'idle' ? prev : { status: 'idle', data: null, error: null }
      )
      return
    }

    const currentRequest = ++requestId.current
    const controller = new AbortController()
    setState({ status: 'loading', data: null, error: null })

    githubApi
      .getDashboard(username, { signal: controller.signal })
      .then((data) => {
        if (requestId.current === currentRequest) {
          setState({ status: 'success', data, error: null })
        }
      })
      .catch((error) => {
        if (controller.signal.aborted) return
        if (requestId.current !== currentRequest) return
        const normalized =
          error instanceof ApiError
            ? error
            : new ApiError('unknown', 'Something went wrong.')
        setState({ status: 'error', data: null, error: normalized })
      })

    return () => controller.abort()
  }, [username])

  return state
}
