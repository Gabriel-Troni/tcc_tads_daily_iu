import { Request, Response } from "express";

export class DiaryController {
  static async getDiary(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }

  static async setDiary(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }
}
