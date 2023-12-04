import apiFetch from "../../api";

/**
 * Checks if the user is authenticated
 *
 * @returns {Promise<boolean>} Whether the user is authenticated or not
 * @throws {Error} If the request fails
 *
 */

export const isAuthenticated = async () => {
  try {
    const res = await apiFetch("/auth/authorized", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data.authorized;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
