import { Request, Response, NextFunction } from "express";
import { ArtistsService } from "../../../services";

/**
 * ArtistsController class handles the logic for the /artists route.
 *
 * @class ArtistsController
 * @method getTopArtists
 */

class ArtistsController {
  /**
   * Fetches the user's top artists from Spotify.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The Express next function.
   *
   */

  public getTopArtists = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { limit, offset, time_range } = req.query;

      const options = {
        limit: limit ? Number(limit) : 20,
        offset: offset ? Number(offset) : 0,
        time_range: time_range ? String(time_range) : "medium_term",
      };

      const { accessToken } = req.session;
      const data = await ArtistsService.fetchTopArtists(accessToken, options);
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  };
}

export default new ArtistsController();
