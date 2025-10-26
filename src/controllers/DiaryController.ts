import { Request, Response } from "express";
import axios from "axios";
import { env } from "../utils/getEnv";

export class DiaryController {
  static async getDiary(req: Request, res: Response) {
    const response = await axios.get(`${env.BACKEND_URL}/v1/calendar`, {
      params: req.query,
      headers: {
        'user-id': req.userId
      }
    })
    return res.status(response.status).json(response.data)
  }

  static async setDiary(req: Request, res: Response) {
    const response = await axios.put(`${env.BACKEND_URL}/v1/calendar`, req.body, {
      headers: {
        'user-id': req.userId
      }
    })
    return res.status(response.status).json(response.data)
  }
}
