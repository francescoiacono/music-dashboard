import axios from "axios";
import { Artist, RequestOptions } from "@spotify-dash/types";

/**
 * Fetches the user's top artists from Spotify.
 *
 * @param accessToken
 * @param {RequestOptions} options
 * @returns {Promise<Artist[]>} Artists array.
 */

export const fetchTopArtists = async (
  accessToken: string,
  options: RequestOptions
): Promise<Artist[]> => {
  const { limit, offset, time_range } = options;
  const { data } = await axios.get(
    `https://api.spotify.com/v1/me/top/artists?limit=${limit}&offset=${offset}&time_range=${time_range}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return data.items;
};
