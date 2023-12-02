import { SessionData } from "express-session";

/**
 * Sets session variables for the user.
 *
 * @param session - The session object.
 * @param accessToken - The access token to be set.
 * @param refreshToken - The refresh token to be set.
 */

export const setSessionVariables = (
  session: SessionData,
  accessToken: string,
  refreshToken: string
) => {
  session.accessToken = accessToken;
  session.refreshToken = refreshToken;
  session.tokenExpiry = Date.now() + 3600000; // 1 hour from now
};
