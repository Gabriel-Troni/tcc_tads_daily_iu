import { Router } from "express";
import { verifyJwt } from "../middlewares/verifyJwt";
import { Profile } from "../types/ProfileEnum";
import { ExerciseController } from "../controllers/ExerciseController";

const exerciseRouter = Router()

exerciseRouter.put("/workout/plan/:id", verifyJwt([Profile.ADMIN]), ExerciseController.setTrainingPlan)
exerciseRouter.put("/workout/:id", verifyJwt([Profile.ADMIN]), ExerciseController.setTraining)
exerciseRouter.put("/:id", verifyJwt([Profile.ADMIN]), ExerciseController.setExercise)

exerciseRouter.post("/workout/completion", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ExerciseController.completeTraining)
exerciseRouter.post("/workout/feedback", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ExerciseController.feedbackTraining)
exerciseRouter.post("/workout/plan", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ExerciseController.addTrainingPlan)

exerciseRouter.post("/workout", verifyJwt([Profile.ADMIN]), ExerciseController.addTraining)
exerciseRouter.post("/", verifyJwt([Profile.ADMIN]), ExerciseController.addExercise)

exerciseRouter.get("/workout/plan", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ExerciseController.getTrainingPlan)

export { exerciseRouter }