import { Router } from "express";
import { validateJwt } from "../middlewares/validateJwt";
import { Role } from "../types/RoleEnum";
import { PreferencesController } from "../controllers/PreferencesController";

const router = Router();

router.get(
  "/notifications",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  PreferencesController.getNotificationsPreferences
);
router.get(
  "/accessibility",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  PreferencesController.getAccessibilityPreferences
);

router.patch(
  "/notifications",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  PreferencesController.setNotificationsPreferences
);
router.patch(
  "/accessibility",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  PreferencesController.setAccessibilityPreferences
);

export default router;
