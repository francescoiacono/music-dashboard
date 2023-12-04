const BASE_URL = "http://localhost:8000/api";

/**
 * Custom fetch wrapper for the API
 *
 * @param {string} endpoint The API endpoint to call
 * @param {RequestInit} options The fetch options
 *
 * @returns {Promise<Response>} The response from the API
 */

const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API call failed: ${response.status}`);
  }

  return response;
};

export default apiFetch;
