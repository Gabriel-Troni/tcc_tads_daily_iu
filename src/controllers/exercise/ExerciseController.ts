import { Request, Response } from "express";
import axios from "axios";
import { env } from "../../utils/getEnv";

export class ExerciseController {
  static async createExercise(req: Request, res: Response) {
    const response = await axios.post(
        `${env.BACKEND_URL}/exercise`,
        req.body
      );
      return res.status(response.status).json(response.data);
  }

  static async getExercises(req: Request, res: Response) {
    const response = await axios.get(`${env.BACKEND_URL}/exercise`);
    return res.status(response.status).json(response.data);
  }

  static async updateExercise(req: Request, res: Response) {
    const { id } = req.params
    const response = await axios.put(`${env.BACKEND_URL}/exercise/${id}`, req.body);
    return res.status(response.status).json(response.data);
  }

  static async deleteExercise(req: Request, res: Response) {
    const { id } = req.params
    const response = await axios.delete(`${env.BACKEND_URL}/exercise/${id}`);
    return res.status(response.status).json(response.data);
  }
}
