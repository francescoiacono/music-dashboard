import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import axios from "axios";
import { authRoutes, userRoutes, artistsRoutes } from "./routes";

dotenv.config();

/**
 * Main application class.
 *
 * This class is responsible for setting up the Express server, including
 * middleware, routes, and error handling.
 *
 */
class App {
  public server: Application;

  constructor() {
    this.server = express();
    this.middlewares();
    this.errorHandling();
    this.routes();
  }

  /**
   * Sets up the Express server middleware.
   * This function sets up the Express server to use JSON, CORS, and sessions.
   * The session secret is set from the SESSION_SECRET environment variable.
   * The client origin is set from the CLIENT_ORIGIN environment variable.
   * The session secret and client origin are set in the .env file.
   *
   */

  private middlewares(): void {
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

  /**
   * Sets up the Express server routes.
   * This function sets up the Express server to use the routes defined in
   * backend/src/routes/${route}/index.ts.
   *
   */

  private routes(): void {
    this.server.use("/api/auth", authRoutes.routes);
    this.server.use("/api/user", userRoutes.routes);
    this.server.use("/api/artists", artistsRoutes.routes);
  }

  /**
   * Sets up the Express server error handling.
   * This function sets up the Express server to use a generic error handler.
   * The error handler checks if the error is an Axios error, and if so, sends
   * the error response from the Axios response. Otherwise, the error message is
   * sent to the client.
   *
   */

  private errorHandling(): void {
    this.server.use(
      (error: any, req: Request, res: Response, next: NextFunction) => {
        console.error(error);
        // Handle specific Axios error
        if (axios.isAxiosError(error)) {
          res.status(error.response?.status || 500).json({
            message: error.message,
            details: error.response?.data,
          });
        } else {
          // Generic error response
          res.status(error.statusCode || 500).json({
            message: error.message || "Internal Server Error",
          });
        }
      }
    );
  }
}

export default new App().server;
