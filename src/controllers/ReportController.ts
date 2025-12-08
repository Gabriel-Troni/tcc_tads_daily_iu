import { Request, Response } from "express";
import axios from "axios";
import { env } from "../utils/getEnv";
export class ReportController {
  static async getReport(req: Request, res: Response) {
    const response = await axios.get(`${env.BACKEND_URL}/report`, {
      params: req.query,
      headers: {
        'x-user-id': req.userId
      }
    })
    return res.status(response.status).json(response.data);
  }
}
