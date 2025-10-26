import { Router } from "express";
import { verifyJwt } from "../middlewares/verifyJwt";
import { Profile } from "../types/ProfileEnum";
import { UserController } from "../controllers/UserController";

const usersRoutes = Router()

usersRoutes.get("/:id", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), UserController.getUser)
usersRoutes.get("/workout/plan", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), UserController.getTrainingPlan)

usersRoutes.put("/", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), UserController.setUser)

usersRoutes.post("/login", UserController.login)
usersRoutes.post("/password/reset", UserController.resetPassword)
usersRoutes.post("/password/forgot", UserController.forgotPassword)
usersRoutes.post("/workout/feedback", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), UserController.feedbackTraining)
usersRoutes.post("/workout/completion", UserController.completeTraining)
usersRoutes.post("/", UserController.addUser)

export { usersRoutes }