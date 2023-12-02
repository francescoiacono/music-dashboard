import { Request, Response } from "express";
import { ErrorUtils, SessionUtils, SpotifyUtils } from "../utils";
import { SPOTIFY_CONFIG } from "../config";
import { SpotifyService } from "../services";

/**
 * Controller class for handling Spotify related requests.
 * This class contains functions for redirecting the user to the Spotify
 * authorization URL, and for handling the callback from Spotify after the user
 * has authorized the app.
 *
 * @class SpotifyController
 * @method redirectToCallbackUrl
 * @method handleCallback
 */

class SpotifyController {
  constructor(
    private readonly clientId: string = SPOTIFY_CONFIG.clientId,
    private readonly redirectUri: string = SPOTIFY_CONFIG.redirectUri
  ) {}

  /**
   * Redirects the user to the Spotify authorization callback URL.
   * This function constructs the callback URL using the client ID and
   * redirect URI, then redirects the user to that URL for Spotify authorization.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   */
  public redirectToCallbackUrl = (req: Request, res: Response) => {
    try {
      const callbackUrl: string = SpotifyUtils.generateCallbackUrl(
        this.clientId,
        this.redirectUri
      );
      res.redirect(callbackUrl);
    } catch (error) {
      ErrorUtils.handleInternalError(error, res);
    }
  };

  /**
   * Handles the callback from Spotify after the user has authorized the app.
   * This function first validates the callback request, then requests the
   * Spotify access token using the authorization code provided in the callback
   * request. The access token and refresh token are then set in the session
   * variables.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   */

  public handleCallback = async (req: Request, res: Response) => {
    try {
      const { code, state } = req.query;
      SpotifyUtils.validateCallbackRequest(state as string);
      const response = await SpotifyService.requestSpotifyToken(code as string);
      const { access_token, refresh_token } = response.data;
      SessionUtils.setSessionVariables(
        req.session,
        access_token,
        refresh_token
      );
      res.redirect(SPOTIFY_CONFIG.clientOrigin);
    } catch (error) {
      ErrorUtils.handleAxiosError(error, res);
    }
  };
}

export default new SpotifyController();
