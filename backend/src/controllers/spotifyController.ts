import { ItemTypes, SpotifyApi } from "@spotify/web-api-ts-sdk";
import dotenv from "dotenv";

dotenv.config();

class SpotifyController {
  private sdk;

  constructor() {
    this.sdk = SpotifyApi.withClientCredentials(
      process.env.SPOTIFY_CLIENT_ID,
      process.env.SPOTIFY_CLIENT_SECRET
    );
  }
}

export default new SpotifyController();
