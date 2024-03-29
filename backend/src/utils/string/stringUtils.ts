import { SPOTIFY_CONFIG } from '../../config';

/**
 * Generates a callback URL for Spotify authorization.
 *
 * @param length - The length of the random string.
 * @returns The random string.
 *
 */

export const generateRandomString = (length: number) => {
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let text = '';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

/**
 * Generates a callback URL for Spotify authorization.
 *
 * @returns The full authorization URL.
 */

export const getEncodedCredentials = () => {
  return Buffer.from(
    `${SPOTIFY_CONFIG.clientId}:${SPOTIFY_CONFIG.clientSecret}`
  ).toString('base64');
};

/**
 * Generates query string from object.
 *
 */

export const buildQueryString = (params: Record<string, any>): string => {
  const queryStringParts = Object.keys(params)
    .filter((key) => params[key] !== undefined)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    );

  return queryStringParts.length > 0 ? `?${queryStringParts.join('&')}` : '';
};
