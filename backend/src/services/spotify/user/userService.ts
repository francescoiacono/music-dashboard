import axios from "axios";
import { UserProfile } from "@spotify-dash/types";

/**
 * Fetches the user's profile from Spotify.
 *
 * @param {string} accessToken - The user's access token.
 * @returns {Promise<UserProfile>} - The user's profile.
 */

export const fetchUserProfile = async (
  accessToken: string
): Promise<UserProfile> => {
  const response = await axios.get<UserProfile>(
    "https://api.spotify.com/v1/me",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
