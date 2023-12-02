import dotenv from "dotenv";
dotenv.config();

// Spotify related constants
export const SPOTIFY_CONFIG = {
  clientId: process.env.SPOTIFY_CLIENT_ID || "",
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET || "",
  redirectUri: process.env.SPOTIFY_REDIRECT_URI || "",
  clientOrigin: process.env.CLIENT_ORIGIN || "",
  authUrl: "https://accounts.spotify.com/authorize/?",
  tokenUrl: "https://accounts.spotify.com/api/token",
  scopes:
    "streaming user-top-read user-read-email user-read-private user-read-recently-played",
};
