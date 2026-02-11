import { Request, Response, NextFunction } from "express";
import axios from "axios";

export const globalErrorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  let status = 500;
  let message = 'Unknown Error';
  console.log(err);

  if (axios.isAxiosError(err)) {
    if (err.code === "ECONNREFUSED") {
      status = 502;
      message = "Backend unavailable";
    } else {
      status = err.response?.status || 500;
      message = err.response?.data?.message || message;
    }
  } else if (err instanceof Error) {
    status = (err as any).cause || 500;
    message = err.message;
  }

  res.status(status).json({ message });
}