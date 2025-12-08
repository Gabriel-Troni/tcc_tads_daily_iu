import { Request, Response } from "express";
import axios from "axios";
import { env } from "../utils/getEnv";

export class AdminController {
  static async getUsers(req: Request, res: Response) {
    const response = await axios.get(`${env.BACKEND_URL}/admin/users`, {
      headers: {
        'x-user-id': req.userId
      }
    });
    return res.status(response.status).json(response.data);
  }

  static async setUserRole(req: Request, res: Response) {
    const response = await axios.post(`${env.BACKEND_URL}/admin/users/role`, req.body, {
      headers: {
        'x-user-id': req.userId
      }
    });
    return res.status(response.status).json(response.data);
  }

  static async setUserStatus(req: Request, res: Response) {
    const response = await axios.patch(`${env.BACKEND_URL}/admin/users/status`, req.body, {
      headers: {
        'x-user-id': req.userId
      }
    });
    return res.status(response.status).json(response.data);
  }

  static async getReports(req: Request, res: Response) {
    const response = await axios.get(`${env.BACKEND_URL}/admin/reports`, {
      headers: {
        'x-user-id': req.userId
      }
    });
    return res.status(response.status).json(response.data);
  }

  static async validateReport(req: Request, res: Response) {
    const response = await axios.post(`${env.BACKEND_URL}/admin/reports/validate`, req.body, {
      headers: {
        'x-user-id': req.userId
      }
    });
    return res.status(response.status).json(response.data);
  }

  static async applyStrike(req: Request, res: Response) {
    const response = await axios.post(`${env.BACKEND_URL}/admin/reports/strike`, req.body, {
      headers: {
        'x-user-id': req.userId
      }
    });
    return res.status(response.status).json(response.data);
  }
}
