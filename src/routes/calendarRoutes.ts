import { Router } from "express";
import { validateJwt } from "../middlewares/validateJwt";
import { Profile } from "../types/ProfileEnum";
import { CalendarController } from "../controllers/CalendarController";

const router = Router();

router.get('/', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), CalendarController.getCalendarEvents);
router.put('/', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), CalendarController.setCalendarEvent);

export default router;
