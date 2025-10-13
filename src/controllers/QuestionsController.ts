import { Request, Response } from "express";

export class QuestionsController {
  static async getQuestions(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }

  static async sendAnswers(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }
}
