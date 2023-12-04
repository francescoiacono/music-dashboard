import { Router } from "express";
import { SpotifyAuthController, UserController } from "../controllers";

const routes = Router();

routes.get("/login", SpotifyAuthController.redirectToCallbackUrl);
routes.get("/callback", SpotifyAuthController.handleCallback);
routes.get("/refresh", SpotifyAuthController.refreshAccessToken);
routes.get(
  "/authorized",
  SpotifyAuthController.checkAccessToken,
  SpotifyAuthController.isAuthorized
);

routes.get(
  "/user",
  SpotifyAuthController.checkAccessToken,
  UserController.fetchUserProfile
);

export { routes };
