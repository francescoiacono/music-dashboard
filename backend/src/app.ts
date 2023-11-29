import express from "express";
import cors from "cors";
import dotenv from "dotenv";
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
      })
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
