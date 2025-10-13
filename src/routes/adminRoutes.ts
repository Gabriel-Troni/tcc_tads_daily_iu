import { Router } from "express";
import { verifyJwt } from "../middlewares/verifyJwt";
import { Profile } from "../types/ProfileEnum";
import { AdminController } from "../controllers/AdminController";

const adminRouter = Router()

adminRouter.post("/role", verifyJwt([Profile.ADMIN]), AdminController.setRole)
adminRouter.get("/", verifyJwt([Profile.ADMIN]), AdminController.getUsers)

export { adminRouter }