import { Router } from "express";
import { SpotifyAuthController, TracksController } from "../../controllers";

const routes = Router();

routes.get(
  "/top",
  SpotifyAuthController.checkAccessToken,
  TracksController.getTopTracks
);

export { routes };
