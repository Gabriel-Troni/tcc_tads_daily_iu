import { Request, Response } from "express";
import axios from "axios";
import { env } from "../utils/getEnv";

export class AdminController {
  static async setRole(req: Request, res: Response) {
      //const response = await axios.post(`${env.BACKEND_URL}/users/login`, req.body)
      //return res.status(response.status).json(response.data)

      return res.status(200).json({funcionando: 'sim'})
  }

  static async getUsers(req: Request, res: Response) {
      //const response = await axios.post(`${env.BACKEND_URL}/users/login`, req.body)
      //return res.status(response.status).json(response.data)

      return res.status(200).json({funcionando: 'sim'})
  }
}