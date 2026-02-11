import { Request, Response } from "express";
import axios from "axios";
import { env } from "../utils/getEnv";

export class ContactController {
  static async sendEmail(req: Request, res: Response) {
    const response = await axios.post(`${env.BACKEND_URL}/contact/support`, req.body)
    return res.status(response.status).json(response.data);
  }

  static async sendProfessionalRequestEmail(req: Request, res: Response) {
    const response = await axios.post(`${env.BACKEND_URL}/contact/professional-request`, req.body)
    return res.status(response.status).json(response.data);
  }
}
