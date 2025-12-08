import { Request, Response } from "express";
import axios from "axios";
import { env } from "../utils/getEnv";

export class UserController {
  static async addUser(req: Request, res: Response) {
    const response = await axios.post(`${env.BACKEND_URL}/users`, req.body, {
      headers: {
        'x-user-id': req.userId || ''
      }
    });
    return res.status(response.status).json(response.data);
  }

  static async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    const response = await axios.get(`${env.BACKEND_URL}/users/${id}`);
    return res.status(response.status).json(response.data);
  }

  static async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const response = await axios.put(`${env.BACKEND_URL}/users/${id}`);
    return res.status(response.status).json(response.data);
  }

  static async login(req: Request, res: Response) {
    const response = await axios.post(
      `${env.BACKEND_URL}/users/login`,
      req.body
    );
    return res.status(response.status).json(response.data);
  }

  static async getWorkoutPlan(req: Request, res: Response) {
    const response = await axios.get(`${env.BACKEND_URL}/users/workout/plan`, {
      headers: {
        "x-user-id": req.userId,
      },
    });
    return res.status(response.status).json(response.data);
  }

  static async completeWorkout(req: Request, res: Response) {
    const response = await axios.post(
      `${env.BACKEND_URL}/users/workout/completion`,
      req.body,
      {
        headers: {
          "x-user-id": req.userId,
        },
      }
    );
    return res.status(response.status).json(response.data);
  }

  static async feedbackWorkout(req: Request, res: Response) {
    const response = await axios.post(
      `${env.BACKEND_URL}/users/workout/feedback`,
      req.body,
      {
        headers: {
          "x-user-id": req.userId,
        },
      }
    );
    return res.status(response.status).json(response.data);
  }

  static async forgotPassword(req: Request, res: Response) {
    const response = await axios.post(
      `${env.BACKEND_URL}/users/password/forgot`,
      {},
      {
        headers: req.headers,
      }
    );
    return res.status(response.status).json(response.data);
  }

  static async resetPassword(req: Request, res: Response) {
    const response = await axios.post(
      `${env.BACKEND_URL}/users/password/reset`,
      req.body
    );
    return res.status(response.status).json(response.data);
  }
}
