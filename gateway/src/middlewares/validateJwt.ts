import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../utils/getEnv";
import { UserToken } from "../types/UserToken";
import { Role } from "../types/RoleEnum";

export const validateJwt = (allowedProfiles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.get("Authorization") || req.get("authorization");
    const token = authHeader?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Token não fornecido." });
    }

    try {
      const decoded = jwt.verify(token, env.SECRET_KEY) as UserToken;

      if (
        allowedProfiles.length &&
        !allowedProfiles.includes(decoded.profile)
      ) {
        return res
          .status(403)
          .json({
            message: "Você não possui permissão para realizar esta operação.",
          });
      }

      req.userId = decoded.sub;
      next();
    } catch (err: any) {
      if (err.name === "TokenExpiredError") {
        return res
          .status(401)
          .json({ message: "Sessão expirada. Faça login novamente." });
      }

      return res.status(401).json({ message: "Token inválido." });
    }
  };
};
