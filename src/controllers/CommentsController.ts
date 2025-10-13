import { Request, Response } from "express";

export class CommentsController {
  static async getCommentReplies(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }

  static async getCommentsByContentId(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }

  static async addComment(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }

  static async toggleLike(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }
  
  static async setComment(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }

  static async deleteComment(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }
}
