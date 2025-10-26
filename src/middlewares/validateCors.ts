import cors, { CorsOptions } from "cors";
import { env } from "../utils/getEnv";

const corsOptions: CorsOptions = {
    origin: [env.FRONTEND_URL],
    credentials: true,
  };

export const validateCors = cors(corsOptions)
