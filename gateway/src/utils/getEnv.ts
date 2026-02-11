import z from "zod";
import dotenv from 'dotenv'

dotenv.config()

const envSchema = z.object({
  BASE_URL: z.string().startsWith("/"),
  FRONTEND_URL: z.string(),
  BACKEND_URL: z.string(),
  SECRET_KEY: z.string(),
});

export const env = envSchema.parse(process.env);