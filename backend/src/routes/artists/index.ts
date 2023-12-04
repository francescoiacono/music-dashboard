import { Router } from "express";
import { SpotifyAuthController, ArtistsController } from "../../controllers";

const routes = Router();

routes.get(
  "/top",
  SpotifyAuthController.checkAccessToken,
  ArtistsController.getTopArtists
);

export { routes };
