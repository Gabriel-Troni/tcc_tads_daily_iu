import { Router } from "express";
import { verifyJwt } from "../middlewares/verifyJwt";
import { Profile } from "../types/ProfileEnum";
import { ContactController } from "../controllers/ContactController";

const contactRouter = Router()

contactRouter.post("/support", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ContactController.requestSupport)
contactRouter.post("/professional-request", verifyJwt([Profile.USER]), ContactController.requestProfessionalProfile)

export { contactRouter }