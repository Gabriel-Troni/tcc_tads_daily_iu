import { Router } from "express";
import { verifyJwt } from "../middlewares/verifyJwt";
import { Profile } from "../types/ProfileEnum";
import { MediaController } from "../controllers/MediaController";

const mediaRouter = Router()

mediaRouter.post("/upload", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), MediaController.addMedia)

export { mediaRouter }