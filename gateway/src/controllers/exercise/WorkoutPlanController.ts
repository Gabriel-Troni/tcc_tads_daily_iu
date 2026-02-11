import { Request, Response } from "express";
import axios from "axios";
import { env } from "../../utils/getEnv";

export class WorkoutPlanController {
  static async createWorkoutPlan(req: Request, res: Response) {
    const response = await axios.post(`${env.BACKEND_URL}/exercise/workout/plan`, req.body);
    return res.status(response.status).json(response.data);
  }

  static async getWorkoutPlans(req: Request, res: Response) {
    const response = await axios.get(`${env.BACKEND_URL}/exercise/workout/plan`);
    return res.status(response.status).json(response.data);
  }

  static async updateWorkoutPlan(req: Request, res: Response) {
    const { id } = req.params
    const response = await axios.put(`${env.BACKEND_URL}/exercise/workout/plan/${id}`, req.body);
    return res.status(response.status).json(response.data);
  }

  static async deleteWorkoutPlan(req: Request, res: Response) {
    const { id } = req.params
    const response = await axios.delete(`${env.BACKEND_URL}/exercise/workout/plan/${id}`);
    return res.status(response.status).json(response.data);
  }
}