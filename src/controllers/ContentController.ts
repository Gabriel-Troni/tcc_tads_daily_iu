import { Request, Response } from "express";

export class ContentController {
  static async getContentById(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }

  static async getContent(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }

  static async repostContent(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }

  static async reportContent(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }

  static async addContent(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }

  static async toggleFavorite(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }

  static async toggleLike(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }

  static async setContent(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }

  static async deleteContent(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }
}