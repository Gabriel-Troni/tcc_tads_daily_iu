import { Router } from "express";
import { validateJwt } from "../middlewares/validateJwt";
import { Role } from "../types/RoleEnum";
import { MediaController } from "../controllers/MediaController";

const router = Router();

router.post(
  "/upload",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  MediaController.uploadMedia
);

export default router;
