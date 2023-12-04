import apiFetch from "../../api";

/**
 * Fetches the current user's profile
 *
 * @returns {Promise<boolean>} Whether the user is authenticated or not
 * @throws {Error} If the request fails
 *
 */

export const fetchCurrentUser = async () => {
  try {
    const res = await apiFetch("/user/me", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const profile = await res.json();
    return profile;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
