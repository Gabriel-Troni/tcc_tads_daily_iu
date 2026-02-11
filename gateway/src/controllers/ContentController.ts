import { Request, Response } from "express";
import axios from "axios";
import { env } from "../utils/getEnv";

export class ContentController {
  static async createContent(req: Request, res: Response) {
    const response = await axios.post(`${env.BACKEND_URL}/content`, req.body)
    return res.status(response.status).json(response.data);
  }

  static async getContentById(req: Request, res: Response) {
    const { id } = req.params
    const response = await axios.get(`${env.BACKEND_URL}/content/${id}`, {
      headers: {
        'x-user-id': req.userId
      }
    })
    return res.status(response.status).json(response.data);
  }

  static async getContents(req: Request, res: Response) {
    const response = await axios.get(`${env.BACKEND_URL}/content`, {
      headers: {
        'x-user-id': req.userId || req.headers['x-user-id'] || req.headers['user-id'],
        'x-profile': req.headers['x-profile']
      }
    })
    return res.status(response.status).json(response.data);
  }

  static async getSavedContents(req: Request, res: Response) {
    const response = await axios.get(`${env.BACKEND_URL}/content/saved`, {
      headers: {
        'x-user-id': req.userId
      }
    })
    return res.status(response.status).json(response.data);
  }

  static async repostContent(req: Request, res: Response) {
    const { id } = req.params
    const response = await axios.post(`${env.BACKEND_URL}/content/${id}/repost`, req.body)
    return res.status(response.status).json(response.data);
  }

  static async reportContent(req: Request, res: Response) {
    const { id } = req.params
    const response = await axios.post(`${env.BACKEND_URL}/content/${id}/report`, req.body)
    return res.status(response.status).json(response.data);
  }

  static async toggleSaved(req: Request, res: Response) {
    const { id } = req.params
    const response = await axios.patch(`${env.BACKEND_URL}/content/${id}/save`, req.body)
    return res.status(response.status).json(response.data);
  }

  static async toggleLike(req: Request, res: Response) {
    const { id } = req.params
    const response = await axios.patch(`${env.BACKEND_URL}/content/${id}`, req.body)
    return res.status(response.status).json(response.data);
  }

  static async updateContent(req: Request, res: Response) {
    const { id } = req.params
    const response = await axios.put(`${env.BACKEND_URL}/content/${id}`, req.body, {
      headers: {
        'x-user-id': req.userId
      }
    })
    return res.status(response.status).json(response.data);
  }

  static async deleteContent(req: Request, res: Response) {
    const { id } = req.params
    const response = await axios.delete(`${env.BACKEND_URL}/content/${id}`)
    return res.status(response.status).json(response.data);
  }
}