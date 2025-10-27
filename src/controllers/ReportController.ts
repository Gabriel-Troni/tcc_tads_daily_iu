import { Request, Response } from "express";
import axios from "axios";
import { env } from "../utils/getEnv";
export class ReportController {
  static async getReport(req: Request, res: Response) {
    return res.status(501).json({ message: 'Não implementado no gateway' });
  }
}
