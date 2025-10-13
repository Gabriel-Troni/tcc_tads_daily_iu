import { Router } from "express";
import { verifyJwt } from "../middlewares/verifyJwt";
import { Profile } from "../types/ProfileEnum";
import { PreferencesController } from "../controllers/PreferencesController";

const preferencesRouter = Router()

preferencesRouter.get("/notifications", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), PreferencesController.getNotificationsPreferences)
preferencesRouter.get("/accessibility", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), PreferencesController.getAccessibilityPreferences)

preferencesRouter.patch("/notifications", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), PreferencesController.setNotificationsPreferences)
preferencesRouter.patch("/accessibility", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), PreferencesController.setAccessibilityPreferences)

export { preferencesRouter }