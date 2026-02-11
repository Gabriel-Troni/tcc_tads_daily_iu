import { UserToken } from "../UserToken";

declare global {
  namespace Express {
    interface Request {
      userId?: string
    }
  }
}