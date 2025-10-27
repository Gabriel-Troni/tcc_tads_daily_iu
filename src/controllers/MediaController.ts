import { Request, Response } from "express";
import axios from "axios";
import { env } from "../utils/getEnv";
export class MediaController {
  static async uploadMedia(req: Request, res: Response) {
    return res.status(501).json({message: 'Não implementado no gateway'});
  }
}
