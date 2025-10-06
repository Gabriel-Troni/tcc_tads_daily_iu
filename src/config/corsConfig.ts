import { env } from "../utils/getEnv";
import { CorsOptions } from "cors";
import { corsMappings } from "./corsMappings";

const compiledCorsMappings = Object.entries(corsMappings).map(([path, cfg]) => {
  const pattern = new RegExp(
    "^" + path.replace(/:\w+/g, "[^/]+") + "$"
  );
  return { pattern, config: cfg };
});

export function getCorsOptions(path: string): CorsOptions {
  const match = compiledCorsMappings.find(({ pattern }) => pattern.test(path));

  if (!match) {
    throw new Error(`CORS não configurado para o caminho: ${path}`);
  }

  return {
    origin: [env.FRONTEND_URL],
    methods: match.config.methods,
    credentials: true,
  };
}