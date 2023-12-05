import { Request, Response, NextFunction } from 'express';
import { ArtistsService } from '../../../services';
import { Artist } from '@spotify-dash/types';

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
        time_range: time_range ? String(time_range) : 'medium_term',
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

  getArtist = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { accessToken } = req.session;

      if (!id) {
        throw new Error('No artist ID provided.');
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

  getArtistAlbums = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { accessToken } = req.session;
      const { limit, offset, time_range } = req.query;

      const options = {
        limit: limit ? Number(limit) : 20,
        offset: offset ? Number(offset) : 0,
        time_range: time_range ? String(time_range) : 'medium_term',
      };

      if (!id) {
        throw new Error('No artist ID provided.');
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
}

export default new ArtistsController();
