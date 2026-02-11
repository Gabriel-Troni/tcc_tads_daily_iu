import { Request, Response } from "express";
import axios from "axios";
import { env } from "../utils/getEnv";
export class PreferencesController {
  static async getNotificationsPreferences(req: Request, res: Response) {
    const response = await axios.get(`${env.BACKEND_URL}/preferences/notifications`, {
      headers: {
        "x-user-id": req.userId,
      },
    });
    return res.status(response.status).json(response.data);
  }

  static async setNotificationsPreferences(req: Request, res: Response) {
    const response = await axios.patch(`${env.BACKEND_URL}/preferences/notifications`, req.body, {
      headers: {
        "x-user-id": req.userId,
      },
    });
    return res.status(response.status).json(response.data);
  }

  static async getAccessibilityPreferences(req: Request, res: Response) {
    const response = await axios.get(`${env.BACKEND_URL}/preferences/accessibility`, {
      headers: {
        "x-user-id": req.userId,
      },
    });
    return res.status(response.status).json(response.data);
  }

  static async setAccessibilityPreferences(req: Request, res: Response) {
    const response = await axios.patch(`${env.BACKEND_URL}/preferences/accessibility`, req.body, {
      headers: {
        "x-user-id": req.userId,
      },
    });
    return res.status(response.status).json(response.data);
  }
}
