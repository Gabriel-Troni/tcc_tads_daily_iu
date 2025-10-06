import { Request, Response, NextFunction } from "express";
import cors, { CorsOptions } from "cors";
import { getCorsOptions } from "../config/corsConfig";

export const dynamicCors = (req: Request, res: Response, next: NextFunction) => {
  try {
    const corsOptions: CorsOptions = getCorsOptions(req.path);

    if (!corsOptions.methods?.includes(req.method)) {
      return res.status(405).json({
        status: 405,
        erro: `Método ${req.method} não permitido para a rota ${req.path}`,
      });
    }

    cors(corsOptions)(req, res, next);
  } catch (error) {
    console.error(`Erro ao configurar CORS: ${error}`);
    res.status(403).json({
      message: "Erro ao configurar CORS",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};