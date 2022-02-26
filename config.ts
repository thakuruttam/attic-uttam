require("dotenv").config({ path: __dirname + "/.env" });
// Mapper for environment variables
export const environment = process.env.NODE_ENV;
export const port = process.env.PORT;
export const corsUrl = process.env.CORS_URL;
export const logDirectory = process.env.LOG_DIR;
export const dbUri: string = process.env.DB_URI || "";
export const googleClientId = process.env.GOOGLE_CLIENT_ID;
export const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
