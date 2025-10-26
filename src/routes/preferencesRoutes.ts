import { Router } from "express";
import { validateJwt } from "../middlewares/validateJwt";
import { Profile } from "../types/ProfileEnum";
import { PreferencesController } from "../controllers/PreferencesController";

const router = Router();

router.get('/notifications', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), PreferencesController.getNotificationsPreferences);
router.get('/accessibility', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), PreferencesController.getAccessibilityPreferences);

router.patch('/notifications', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), PreferencesController.setNotificationsPreferences);
router.patch('/accessibility', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), PreferencesController.setAccessibilityPreferences);

export default router;
