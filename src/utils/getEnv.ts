import z from "zod";
import dotenv from 'dotenv'

dotenv.config()

const envSchema = z.object({
  PORT: z.preprocess((value) => Number(value), z.number().int().min(1).max(65535)),
  BASE_URL: z.string().startsWith("/"),
  FRONTEND_URL: z.string(),
  BACKEND_URL: z.string(),
});

export const env = envSchema.parse(process.env);