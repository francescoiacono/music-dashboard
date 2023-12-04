import { Router } from "express";
import { SpotifyAuthController, UserController } from "../../controllers";

const routes = Router();

routes.get(
  "/me",
  SpotifyAuthController.checkAccessToken,
  UserController.fetchUserProfile
);

export { routes };
