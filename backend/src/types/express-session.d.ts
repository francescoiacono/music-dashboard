import { Session } from "express-session";

/**
 * Extended Express session data.
 *
 * This interface extends the Express session data to include the access token,
 * refresh token, and token expiry. This allows the session data to be used
 * throughout the application.
 *
 */
declare module "express-session" {
  export interface SessionData extends Session {
    accessToken?: string;
    refreshToken?: string;
    tokenExpiry?: number;
  }
}
