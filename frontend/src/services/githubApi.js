import { apiClient } from './api'

/**
 * All GitHub-profile-analyzer API calls live here so components never
 * import Axios or build URLs directly.
 */
export const githubApi = {
  /** Full dashboard payload: profile, repositories, languages, score, activity. */
  getDashboard(username, config) {
    return apiClient
      .get(`/api/users/${encodeURIComponent(username)}/dashboard`, config)
      .then((res) => res.data)
  },

  getProfile(username, config) {
    return apiClient
      .get(`/api/users/${encodeURIComponent(username)}`, config)
      .then((res) => res.data)
  },

  getRepositories(username, config) {
    return apiClient
      .get(`/api/users/${encodeURIComponent(username)}/repos`, config)
      .then((res) => res.data)
  },

  getLanguages(username, config) {
    return apiClient
      .get(`/api/users/${encodeURIComponent(username)}/languages`, config)
      .then((res) => res.data)
  },

  getScore(username, config) {
    return apiClient
      .get(`/api/users/${encodeURIComponent(username)}/score`, config)
      .then((res) => res.data)
  },

  getActivity(username, config) {
    return apiClient
      .get(`/api/users/${encodeURIComponent(username)}/activity`, config)
      .then((res) => res.data)
  },
}
