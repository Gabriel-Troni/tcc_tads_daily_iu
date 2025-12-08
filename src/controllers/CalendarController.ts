import { Request, Response } from "express";
import axios from "axios";
import { env } from "../utils/getEnv";

export class CalendarController {
  static async getCalendarEvents(req: Request, res: Response) {
    const response = await axios.get(`${env.BACKEND_URL}/calendar`, {
      params: req.query,
      headers: {
        "x-user-id": req.userId,
      },
    });
    return res.status(response.status).json(response.data);
  }

  static async setCalendarEvent(req: Request, res: Response) {
    const response = await axios.put(`${env.BACKEND_URL}/calendar`, req.body, {
      headers: {
        "x-user-id": req.userId,
      },
    });
    return res.status(response.status).json(response.data);
  }
}
