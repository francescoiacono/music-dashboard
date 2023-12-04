import { NextFunction, Request, Response } from "express";
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
   * @param {NextFunction} next - The Express next function.
   */
  public redirectToCallbackUrl = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const callbackUrl: string = SpotifyUtils.generateCallbackUrl(
        this.clientId,
        this.redirectUri
      );
      res.redirect(callbackUrl);
    } catch (error) {
      next(error);
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
   * @param {NextFunction} next - The Express next function.
   */

  public handleCallback = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
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
      next(error);
    }
  };

  /**
   * Refreshes the access token.
   * This function refreshes the access token by sending a request to Spotify's
   * token endpoint with the refresh token. The new access token is then set in
   * the session variables.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The Express next function.
   */

  public refreshAccessToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { refreshToken } = req.session;
      const response = await SpotifyService.requestNewAccessToken(refreshToken);
      const { access_token } = response.data;
      SessionUtils.setSessionVariables(req.session, access_token, refreshToken);
      res.send({ access_token });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Checks if the access token has expired.
   * This function checks if the access token has expired by comparing the
   * current time with the expiry time stored in the session variables. If the
   * access token has expired, it is refreshed.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The Express next function.
   */

  public checkAccessToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const tokenExpiry = req.session.tokenExpiry;
      if (tokenExpiry && tokenExpiry < Date.now()) {
        await this.refreshAccessToken(req, res, next);
      } else {
        next();
      }
    } catch (error) {
      next(error);
    }
  };

  /**
   * Checks if the user is authorized.
   * This function checks if the user is authorized by checking if the access
   * token is present in the session variables.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @returns {boolean} - Whether the user is authorized.
   */

  public isAuthorized = (req: Request, res: Response) => {
    const authorized = Boolean(req.session.accessToken);
    res.send({ authorized });
  };
}

export default new SpotifyController();
