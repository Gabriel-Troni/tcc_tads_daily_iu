import { Request, Response } from "express";
import axios from "axios";
import { env } from "../utils/getEnv";

export class AdminController {
    static async getUsers(req: Request, res: Response) {
        //const response = await axios.post(`${env.BACKEND_URL}/users/login`, req.body)
        //return res.status(response.status).json(response.data)
        
        return res.status(200).json({funcionando: 'sim'})

        const response = await axios.get(`${env.BACKEND_URL}/v1/calendar`, {
              params: req.query,
              headers: {
                "user-id": req.userId,
              },
            });
            return res.status(response.status).json(response.data);
    }
    
    static async setUserRole(req: Request, res: Response) {
        //const response = await axios.post(`${env.BACKEND_URL}/users/login`, req.body)
        //return res.status(response.status).json(response.data)
        
        return res.status(200).json({funcionando: 'sim'})
    }
    
    static async getReports(req: Request, res: Response) {
        //const response = await axios.post(`${env.BACKEND_URL}/users/login`, req.body)
        //return res.status(response.status).json(response.data)
  
        return res.status(200).json({funcionando: 'sim'})
    }

  static async validateReport(req: Request, res: Response) {
      //const response = await axios.post(`${env.BACKEND_URL}/users/login`, req.body)
      //return res.status(response.status).json(response.data)

      return res.status(200).json({funcionando: 'sim'})
  }

  static async applyStrike(req: Request, res: Response) {
      //const response = await axios.post(`${env.BACKEND_URL}/users/login`, req.body)
      //return res.status(response.status).json(response.data)

      return res.status(200).json({funcionando: 'sim'})
  }


}