import { Request, Response } from "express";

export class CategoryController {
  static async getCategories(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }

  static async addCategories(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }

  static async setCategories(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }

  static async deleteCategories(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }
}