import { Request, Response } from "express";
import axios from "axios";
import { env } from "../utils/getEnv";

export class CalendarController {
  static async getCalendarEvents(req: Request, res: Response) {
    const URL = `${env.BACKEND_URL}/calendar`;

    const response = await axios.get(URL, {
      params: req.query,
      headers: {
        "user-id": req.userId,
      },
    });
    return res.status(response.status).json(response.data);
  }

  static async setCalendarEvent(req: Request, res: Response) {
    const URL = `${env.BACKEND_URL}/calendar`;

    const response = await axios.put(URL, req.body, {
      headers: {
        "user-id": req.userId,
      },
    });
    return res.status(response.status).json(response.data);
  }
}
