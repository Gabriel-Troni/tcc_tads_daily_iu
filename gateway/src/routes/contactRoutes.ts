import { Router } from "express";
import { validateJwt } from "../middlewares/validateJwt";
import { Role } from "../types/RoleEnum";
import { ContactController } from "../controllers/ContactController";

const router = Router();

router.post(
  "/support",
  ContactController.sendEmail
);
router.post(
  "/professional-request",
  validateJwt([Role.USER]),
  ContactController.sendProfessionalRequestEmail
);

export default router;
