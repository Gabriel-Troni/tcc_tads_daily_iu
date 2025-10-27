import { Router } from "express";
import { validateJwt } from "../middlewares/validateJwt";
import { Profile } from "../types/ProfileEnum";
import { ContactController } from "../controllers/ContactController";

const router = Router();

router.post('/support', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ContactController.sendEmail);
router.post('/professional-request', validateJwt([Profile.USER]), ContactController.sendProfessionalRequestEmail);

export default router;
