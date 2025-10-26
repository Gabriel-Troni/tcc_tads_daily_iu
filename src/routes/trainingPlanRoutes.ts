import { Router } from "express";
import { ExerciseController } from "../controllers/ExerciseController";
import { verifyJwt } from "../middlewares/verifyJwt";
import { Profile } from "../types/ProfileEnum";

const trainingPlanRouter = Router()

trainingPlanRouter.get("/", verifyJwt([Profile.ADMIN]), ExerciseController.getAllTrainingPlans)
trainingPlanRouter.post("/", verifyJwt([Profile.ADMIN]), ExerciseController.addTrainingPlan)
trainingPlanRouter.put("/:id", verifyJwt([Profile.ADMIN]), ExerciseController.setTrainingPlan)
trainingPlanRouter.delete("/:id", verifyJwt([Profile.ADMIN]), ExerciseController.deleteTrainingPlan)

export { trainingPlanRouter }