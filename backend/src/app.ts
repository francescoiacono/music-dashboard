import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import { routes } from "./routes";

dotenv.config();

class App {
  public server;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      cors({
        origin: process.env.CLIENT_ORIGIN,
        credentials: true,
      })
    );

    this.server.use(
      session({
        secret: process.env.SESSION_SECRET as string,
        resave: false,
        saveUninitialized: true,
      })
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;

declare module "express-session" {
  // Add the accessToken, refreshToken, and tokenExpiry to the session data
  export interface SessionData {
    accessToken?: string;
    refreshToken?: string;
    tokenExpiry?: number;
  }
}
