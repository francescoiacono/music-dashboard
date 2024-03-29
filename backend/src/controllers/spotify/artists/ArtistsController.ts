import { Request, Response, NextFunction } from "express";
import { ArtistsService } from "../../../services";
import { Artist, RequestOptions } from "@spotify-dash/types";

/**
 * ArtistsController class handles the logic for the "/artists"SS route.
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
      const artists: Artist[] = await ArtistsService.fetchTopArtists(
        accessToken,
        options
      );
      res.status(200).json(artists);
    } catch (error) {
      next(error);
    }
  };

  /**
   * Fetches an artist from Spotify.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The Express next function.
   *
   */

  getArtist = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { accessToken } = req.session;

      if (!id) {
        throw new Error("No artist ID provided.");
      }

      const artist: Artist = await ArtistsService.fetchArtist(
        accessToken,
        id as string
      );
      res.status(200).json(artist);
    } catch (error) {
      next(error);
    }
  };

  /**
   * Fetches an artist's albums from Spotify.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The Express next function.
   *
   */

  getArtistAlbums = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { accessToken } = req.session;
      const { limit, include_groups } = req.query;

      const options: RequestOptions = {
        include_groups: include_groups ? String(include_groups) : "album",
        limit: limit ? Number(limit) : 20,
      };

      if (!id) {
        throw new Error("No artist ID provided.");
      }

      const albums = await ArtistsService.fetchArtistAlbums(
        accessToken,
        id as string,
        options
      );
      res.status(200).json(albums);
    } catch (error) {
      next(error);
    }
  };

  /**
   * Fetches an artist's top tracks from Spotify.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The Express next function.
   *
   */

  getArtistTopTracks = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const { accessToken } = req.session;

      if (!id) {
        throw new Error("No artist ID provided.");
      }

      const topTracks = await ArtistsService.fetchArtistTopTracks(
        accessToken,
        id as string
      );

      res.status(200).json(topTracks);
    } catch (error) {
      next(error);
    }
  };

  getRelatedArtists = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const { accessToken } = req.session;

      if (!id) {
        throw new Error("No artist ID provided.");
      }

      const relatedArtists = await ArtistsService.fetchRelatedArtists(
        accessToken,
        id as string
      );

      res.status(200).json(relatedArtists);
    } catch (error) {
      next(error);
    }
  };
}

export default new ArtistsController();
