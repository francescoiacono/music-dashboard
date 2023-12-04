import { Router } from "express";
import SpotifyController from "../controllers/spotifyController";

const routes = Router();

routes.get("/login", SpotifyController.redirectToCallbackUrl);
routes.get("/callback", SpotifyController.handleCallback);
routes.get("/refresh", SpotifyController.refreshAccessToken);
routes.get(
  "/authorized",
  SpotifyController.checkAccessToken,
  SpotifyController.isAuthorized
);

export { routes };
