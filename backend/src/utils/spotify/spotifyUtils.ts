import { SPOTIFY_CONFIG } from "../../config";
import { generateRandomString } from "../string";
import { Request } from "express";

/**
 * Generates a callback URL for Spotify authorization.
 *
 * @param client_id - The client ID for the Spotify application.
 * @param redirect_uri - The URI to redirect to after authorization.
 * @returns The full authorization URL.
 */

export const generateCallbackUrl = (
  client_id: string,
  redirect_uri: string
) => {
  const state = generateRandomString(16);
  const authQueryParams = new URLSearchParams({
    response_type: "code",
    client_id: client_id,
    scope: SPOTIFY_CONFIG.scopes,
    redirect_uri: redirect_uri,
    state: state,
  });

  return `${SPOTIFY_CONFIG.authUrl}${authQueryParams.toString()}`;
};

/**
 * Validates the callback request from Spotify.
 *
 * @param state - The state parameter received from Spotify.
 * @throws An error if the state is null or undefined.
 */

export const validateCallbackRequest = (state: string) => {
  if (state === null || state === undefined) {
    throw new Error("State is null or undefined");
  }
};
