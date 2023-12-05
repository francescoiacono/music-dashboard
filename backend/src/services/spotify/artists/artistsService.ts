import axios from 'axios';
import { Album, Artist, RequestOptions, Track } from '@spotify-dash/types';
import { StringUtils } from '../../../utils';

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
  id: string,
  options?: RequestOptions
): Promise<Album[]> => {
  const query = StringUtils.buildQueryString(options || {});
  const url = `https://api.spotify.com/v1/artists/${id}/albums${query}`;

  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data.items;
};

export const fetchArtistTopTracks = async (
  accessToken: string,
  id: string
): Promise<Track[]> => {
  const url = `https://api.spotify.com/v1/artists/${id}/top-tracks?country=US`;

  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  console.log('data', data);

  return data.tracks;
};

export const fetchRelatedArtists = async (
  accessToken: string,
  id: string
): Promise<Artist[]> => {
  const url = `https://api.spotify.com/v1/artists/${id}/related-artists`;

  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data.artists;
};
