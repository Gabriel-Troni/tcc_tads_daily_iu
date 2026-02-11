import { Request, Response } from "express";
import axios from "axios";
import { env } from "../../utils/getEnv";

export class WorkoutController {
  static async createWorkout(req: Request, res: Response) {
    const response = await axios.post(`${env.BACKEND_URL}/exercise/workout`, req.body);
    return res.status(response.status).json(response.data);
  }

  static async getWorkouts(req: Request, res: Response) {
    const response = await axios.get(`${env.BACKEND_URL}/exercise/workout`);
    return res.status(response.status).json(response.data);
  }

  static async updateWorkout(req: Request, res: Response) {
    const { id } = req.params
    const response = await axios.put(`${env.BACKEND_URL}/exercise/workout/${id}`, req.body);
    return res.status(response.status).json(response.data);
  }

  static async deleteWorkout(req: Request, res: Response) {
    const { id } = req.params
    const response = await axios.delete(`${env.BACKEND_URL}/exercise/workout/${id}`);
    return res.status(response.status).json(response.data);
  }
}