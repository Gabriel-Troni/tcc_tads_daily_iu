import { Router } from "express";
import { validateJwt } from "../middlewares/validateJwt";
import { Profile } from "../types/ProfileEnum";
import { MediaController } from "../controllers/MediaController";

const router = Router();

router.post('/upload', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), MediaController.uploadMedia);

export default router;
