import { Request, Response } from "express";
import axios from "axios";
import { env } from "../utils/getEnv";

export class UserController {
  static async login(req: Request, res: Response) {
      const response = await axios.post(`${env.BACKEND_URL}/users/login`, req.body);
      return res.status(response.status).json(response.data)
  }

  static async getTrainingPlan(req: Request, res: Response) {
      return res.status(200).json({ funcionando: 'sim' });
  }

  static async completeTraining(req: Request, res: Response) {
      return res.status(200).json({ funcionando: 'sim' });
  }

  static async feedbackTraining(req: Request, res: Response) {
      return res.status(200).json({ funcionando: 'sim' });
  }

  static async addUser(req: Request, res: Response) {
      return res.status(200).json({ funcionando: 'sim' });
  }

  static async getUser(req: Request, res: Response) {
      return res.status(200).json({ funcionando: 'sim' });
  }

  static async setUser(req: Request, res: Response) {
      return res.status(200).json({ funcionando: 'sim' });
  }

  static async forgotPassword(req: Request, res: Response) {
      return res.status(200).json({ funcionando: 'sim' });
  }

  static async resetPassword(req: Request, res: Response) {
      return res.status(200).json({ funcionando: 'sim' });
  }
}