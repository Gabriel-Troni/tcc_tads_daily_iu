import { Request, Response } from "express";
import axios from "axios";
import { env } from "../utils/getEnv";

export class CategoryController {
  static async createCategory(req: Request, res: Response) {
    const response = await axios.post(`${env.BACKEND_URL}/content/category`, req.body)
    return res.status(response.status).json(response.data);
  }

  static async getCategories(req: Request, res: Response) {
    const response = await axios.get(`${env.BACKEND_URL}/content/category`)
    return res.status(response.status).json(response.data);
  }

  static async updateCategory(req: Request, res: Response) {
    const { id } = req.params
    const response = await axios.put(`${env.BACKEND_URL}/content/category/${id}`, req.body)
    return res.status(response.status).json(response.data);
  }

  static async deleteCategory(req: Request, res: Response) {
    const { id } = req.params
    const response = await axios.put(`${env.BACKEND_URL}/content/category/${id}`)
    return res.status(response.status).json(response.data);
  }
}
