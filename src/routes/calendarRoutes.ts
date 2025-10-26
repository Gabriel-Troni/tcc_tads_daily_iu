import { Router } from "express";
import { verifyJwt } from "../middlewares/verifyJwt";
import { Profile } from "../types/ProfileEnum";
import { CalendarController } from "../controllers/CalendarController";

const calendarRouter = Router()

calendarRouter.get("/", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), CalendarController.getCalendarEvents)
calendarRouter.put("/", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), CalendarController.setCalendarEvent)

export { calendarRouter }