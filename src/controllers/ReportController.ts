import { Request, Response } from "express";

export class ReportController {
  static async getReport(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }
}
