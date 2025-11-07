import { Request, Response } from "express";
import axios from "axios";
import { env } from "../../utils/getEnv";

export class ExerciseAttributeController {
  static async createAttribute(req: Request, res: Response) {
    const response = await axios.post(`${env.BACKEND_URL}/exercise/attribute`, req.body)
    return res.status(response.status).json(response.data);
  }

  static async getAttributes(req: Request, res: Response) {
    const response = await axios.get(`${env.BACKEND_URL}/exercise/attribute`)
    return res.status(response.status).json(response.data);
  }

  static async updateAttribute(req: Request, res: Response) {
    const { id } = req.params
    const response = await axios.put(`${env.BACKEND_URL}/exercise/attribute/${id}`, req.body)
    return res.status(response.status).json(response.data);
  }

  static async deleteAttribute(req: Request, res: Response) {
    const { id } = req.params
    const response = await axios.delete(`${env.BACKEND_URL}/exercise/attribute/${id}`)
    return res.status(response.status).json(response.data);
  }
}
