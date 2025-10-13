import { Request, Response } from "express";

export class PreferencesController {
  static async getNotificationsPreferences(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }

  static async setNotificationsPreferences(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }

  static async getAccessibilityPreferences(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }

  static async setAccessibilityPreferences(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }
}
