import { Request, Response } from "express";
import axios from "axios";
import { env } from "../utils/getEnv";

export class CommentsController {
  static async createComment(req: Request, res: Response) {
    const response = await axios.post(`${env.BACKEND_URL}/content/comments`, req.body)
    return res.status(response.status).json(response.data);
  }

  static async getCommentReplies(req: Request, res: Response) {
    const { id } = req.params
    const response = await axios.get(`${env.BACKEND_URL}/content/comments/${id}/replies`, {
      params: req.query,
      headers: {
        'x-user-id': req.userId
      }
    })
    return res.status(response.status).json(response.data);
  }

  static async getComments(req: Request, res: Response) {
    const { id } = req.params
    const response = await axios.get(`${env.BACKEND_URL}/content/comments/${id}`, {
      params: req.query,
      headers: {
        'x-user-id': req.userId
      }
    })
    return res.status(response.status).json(response.data);
  }

  static async toggleLike(req: Request, res: Response) {
    const { id } = req.params
    const response = await axios.patch(`${env.BACKEND_URL}/content/comments/${id}`, req.body)
    return res.status(response.status).json(response.data);
  }
  
  static async updateComment(req: Request, res: Response) {
    const { id } = req.params
    const response = await axios.put(`${env.BACKEND_URL}/content/comments/${id}`, req.body, {
      headers: {
        'x-user-id': req.userId
      }
    })
    return res.status(response.status).json(response.data);
  }

  static async deleteComment(req: Request, res: Response) {
    const { id } = req.params
    const response = await axios.delete(`${env.BACKEND_URL}/content/comments/${id}`)
    return res.status(response.status).json(response.data);
  }
}
