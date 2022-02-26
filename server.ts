import express, { Request, Response, NextFunction } from "express";
import Logger from "./core/Logger";
import cors from "cors";
import passport from "passport";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";

import { corsUrl, dbUri } from "./config";
import "./database";
import { route } from "./src/routes";
process.on("uncaughtException", (e) => {
  Logger.error(e);
});

const app = express();

// MIDDLEWARES

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({ origin: corsUrl, optionsSuccessStatus: 200, credentials: true })
);
app.use(
  session({
    secret: "asljdflaksdf",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: dbUri,
    }),
    cookie: {
      // secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 7, // One Week
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(
  morgan(function (tokens: any, req: any, res: any) {
    const msg = [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
    ].join(" ");
    Logger.http(msg);
    return null;
    // return msg;
  })
);

// Routes
app.get("/", (_, res) => res.send("<h1>Healthy server!</h1>"));

app.use("/v1", route);

export default app;
