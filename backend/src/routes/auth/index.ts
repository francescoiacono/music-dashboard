import { Router } from "express";
import { SpotifyAuthController } from "../../controllers";

const routes = Router();

/**
 * Spotify authentication routes.
 * These routes are used to authenticate the user with Spotify.
 * The user is redirected to the Spotify login page, and then redirected back
 * to the application after logging in.
 */

/**
 * Redirects the user to the Spotify login page.
 */

routes.get("/login", SpotifyAuthController.redirectToCallbackUrl);

/**
 * Handles the callback from the Spotify login page.
 */

routes.get("/callback", SpotifyAuthController.handleCallback);

/**
 * Logs the user out.
 */

routes.get("/logout", SpotifyAuthController.logout);

/**
 * Checks if the user is authorized.
 */

routes.get(
  "/authorized",
  SpotifyAuthController.checkAccessToken,
  SpotifyAuthController.isAuthorized
);

export { routes };
