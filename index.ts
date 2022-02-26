import Logger from "./core/Logger";
import { port } from "./config";
import app from "./server";

app
  .listen(port, () => {
    Logger.info(`server running on port : ${port}`);
  })
  .on("error", (e) => Logger.error("Error in starting server", e));
