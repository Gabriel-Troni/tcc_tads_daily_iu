import cors, { CorsOptions } from "cors";
import { env } from "../utils/getEnv";

const corsOptions: CorsOptions = {
    origin: env.FRONTEND_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-user-id', 'user-id', 'x-content-id', 'x-profile'],
  };

export const validateCors = cors(corsOptions)
