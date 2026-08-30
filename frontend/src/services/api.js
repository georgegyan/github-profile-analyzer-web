import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000'

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    Accept: 'application/json',
  },
})

/**
 * A normalized error shape every component can rely on, so components
 * never have to inspect raw Axios/network internals.
 *
 * type: 'not_found' | 'server' | 'network' | 'timeout' | 'unknown'
 */
export class ApiError extends Error {
  constructor(type, message) {
    super(message)
    this.name = 'ApiError'
    this.type = type
  }
}

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isCancel(error)) {
      return Promise.reject(error)
    }

    if (error.code === 'ECONNABORTED') {
      return Promise.reject(
        new ApiError('timeout', 'The request took too long to respond.')
      )
    }

    if (!error.response) {
      return Promise.reject(
        new ApiError('network', 'Could not reach the server. Check your connection.')
      )
    }

    const status = error.response.status

    if (status === 404) {
      return Promise.reject(new ApiError('not_found', 'Profile not found.'))
    }

    if (status >= 500) {
      return Promise.reject(
        new ApiError('server', 'The server ran into a problem processing this request.')
      )
    }

    return Promise.reject(
      new ApiError('unknown', error.response.data?.detail || 'Something went wrong.')
    )
  }
)
