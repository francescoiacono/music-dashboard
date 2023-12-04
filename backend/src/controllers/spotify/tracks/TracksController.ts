import { Track } from "@spotify-dash/types";
import { Request, Response, NextFunction } from "express";
import { TracksService } from "../../../services";

class TracksController {
  public getTopTracks = async (
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
      const tracks: Track[] = await TracksService.fetchTopTracks(
        accessToken,
        options
      );

      res.status(200).json({ tracks });
    } catch (error) {
      next(error);
    }
  };
}

export default new TracksController();
