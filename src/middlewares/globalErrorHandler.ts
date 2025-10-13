import { Request, Response, NextFunction } from "express";
import axios from "axios";

export const globalErrorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  let status = 500;
  let message = 'Erro interno do servidor';

  if (axios.isAxiosError(err)) {
    if (err.code === "ECONNREFUSED") {
      status = 502;
      message = "Backend indisponível";
    } else {
      status = err.response?.status || 500;
      message = err.response?.data?.error || message;
    }
  } else if (err instanceof Error) {
    message = err.message;
  }

  res.status(status).json({ status, erro: message });
}