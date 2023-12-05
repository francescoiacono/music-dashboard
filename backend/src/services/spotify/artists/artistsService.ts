import axios from 'axios';
import { Album, Artist, RequestOptions } from '@spotify-dash/types';

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

export const fetchArtist = async (
  accessToken: string,
  id: string
): Promise<Artist> => {
  const { data } = await axios.get(`https://api.spotify.com/v1/artists/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export const fetchArtistAlbums = async (
  accessToken: string,
  id: string
): Promise<Album[]> => {
  const { data } = await axios.get(
    `https://api.spotify.com/v1/artists/${id}/albums`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return data;
};
