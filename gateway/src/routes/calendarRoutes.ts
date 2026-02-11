import { Router } from "express";
import { validateJwt } from "../middlewares/validateJwt";
import { Role } from "../types/RoleEnum";
import { CalendarController } from "../controllers/CalendarController";

const router = Router();

router.get(
  "/",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  CalendarController.getCalendarEvents
);
router.put(
  "/",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  CalendarController.setCalendarEvent
);

export default router;
