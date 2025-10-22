import { Router } from "express";
import { verifyJwt } from "../middlewares/verifyJwt";
import { Profile } from "../types/ProfileEnum";
import { AdminController } from "../controllers/AdminController";

const adminRouter = Router()

adminRouter.get("/users", verifyJwt([Profile.ADMIN]), AdminController.getUsers)
adminRouter.get("/reports", verifyJwt([Profile.ADMIN]), AdminController.getComplaintsReport)
adminRouter.post("/users/role", verifyJwt([Profile.ADMIN]), AdminController.setRole)
adminRouter.post("/reports/validate", verifyJwt([Profile.ADMIN]), AdminController.validateComplaint)
adminRouter.post("/reports/strike", verifyJwt([Profile.ADMIN]), AdminController.strikeUser)

export { adminRouter }