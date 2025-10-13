import { Request, Response } from "express";

export class MediaController {
  static async addMedia(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'setTrainingPlan' });
  }
}
