import { Request, Response } from "express";
import axios from "axios";
import { env } from "../utils/getEnv";
export class QuestionsController {
  static async getQuestions(req: Request, res: Response) {
    const response = await axios.get(`${env.BACKEND_URL}/questions/onboard`, {
      headers: {
        'x-user-id': req.userId || '',
      },
    });
    return res.status(response.status).json(response.data);
  }

  static async sendAnswers(req: Request, res: Response) {
    const response = await axios.post(`${env.BACKEND_URL}/questions/onboard`, req.body, {
      headers: {
        'x-user-id': req.userId || '',
      },
    });
    return res.status(response.status).json(response.data);
  }
}
