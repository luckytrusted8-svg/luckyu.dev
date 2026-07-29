import axios from "axios";

/**
 * Base URL of the Laravel API, e.g. http://localhost:8000
 * Sanctum SPA auth requires the frontend and backend to share the same
 * top-level domain (or be configured via SANCTUM_STATEFUL_DOMAINS).
 */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

/**
 * Laravel Sanctum SPA auth requires hitting the CSRF cookie endpoint
 * (outside /api, at the app root) before the first stateful request
 * (login, logout, or any mutating admin request).
 */
export async function ensureCsrfCookie() {
  await axios.get(`${API_BASE_URL}/sanctum/csrf-cookie`, {
    withCredentials: true,
  });
}

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Session expired or not authenticated — handled by the calling
      // feature (e.g. redirect to /admin/login), not globally, to avoid
      // surprising redirects on public-facing pages that also use this client.
    }
    return Promise.reject(error);
  }
);
