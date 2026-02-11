import { Request, Response, NextFunction } from "express";
import { env } from "../utils/getEnv";

export const validateBaseUrl = (req: Request, res: Response, next: NextFunction) => {
  if (!req.path.startsWith(env.BASE_URL)) {
    return res.status(400).json({
      message: `Rota inválida: todas as requisições devem começar com '${env.BASE_URL}'`,
      received: req.path,
    });
  }
  next();
};