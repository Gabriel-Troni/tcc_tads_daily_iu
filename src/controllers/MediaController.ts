import { Request, Response } from "express";
import axios from "axios";
import { env } from "../utils/getEnv";
export class MediaController {
  static async uploadMedia(req: Request, res: Response) {
      const response = await axios({
        method: "post",
        url: `${env.BACKEND_URL}/media/upload`,
        data: req,
        headers: req.headers,
        maxBodyLength: 500 * 1024 * 1024, // 500MiB
        maxContentLength: 500 * 1024 * 1024, // 500MiB
        transformRequest: [(data) => data],
      });

      return res.status(response.status).json(response.data);
  }
}
