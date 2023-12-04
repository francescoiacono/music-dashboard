import axios from "axios";
import { SPOTIFY_CONFIG } from "../../config";
import { StringUtils } from "../../utils";

/**
 * Requests an access token from Spotify's API.
 *
 * This function sends a POST request to the Spotify token URL with the necessary
 * data (including the code received from the Spotify authorization flow, the redirect URI,
 * and the grant type). It also sets the appropriate headers, including the encoded
 * client credentials for Spotify.
 *
 * @param {string} code - The authorization code received from Spotify after user authorization.
 * @returns A promise that resolves to the response from Spotify's token endpoint.
 */

export const requestSpotifyToken = async (code: string) => {
  return axios({
    method: "post",
    url: SPOTIFY_CONFIG.tokenUrl,
    data: new URLSearchParams({
      code,
      redirect_uri: SPOTIFY_CONFIG.redirectUri,
      grant_type: "authorization_code",
    }),
    headers: {
      Authorization: `Basic ${StringUtils.getEncodedCredentials()}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

/**
 * Requests a new access token from Spotify's API.
 *
 * This function sends a POST request to the Spotify token URL with the necessary
 * data (including the refresh token received from Spotify after the initial authorization flow,
 * and the grant type). It also sets the appropriate headers, including the encoded
 * client credentials for Spotify.
 *
 * @param {string} refreshToken - The refresh token received from Spotify after the initial authorization flow.
 * @returns A promise that resolves to the response from Spotify's token endpoint.
 */

export const requestNewAccessToken = async (refreshToken: string) => {
  return axios({
    method: "post",
    url: SPOTIFY_CONFIG.tokenUrl,
    data: new URLSearchParams({
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
    headers: {
      Authorization: `Basic ${StringUtils.getEncodedCredentials()}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};
