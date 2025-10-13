import { Request, Response } from "express";

export class ContactController {
  static async requestSupport(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }

  static async requestProfessionalProfile(req: Request, res: Response) {
    return res.status(200).json({ funcionando: 'sim' });
  }
}
