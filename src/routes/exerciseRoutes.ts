import { Router } from "express";
import { verifyJwt } from "../middlewares/verifyJwt";
import { Profile } from "../types/ProfileEnum";
import { ExerciseController } from "../controllers/ExerciseController";

const exerciseRouter = Router()

exerciseRouter.get('/', verifyJwt([Profile.ADMIN]), ExerciseController.getExercises)
exerciseRouter.post("/", verifyJwt([Profile.ADMIN]), ExerciseController.addExercise)
exerciseRouter.put("/:id", verifyJwt([Profile.ADMIN]), ExerciseController.setExercise)
exerciseRouter.delete("/:id", verifyJwt([Profile.ADMIN]), ExerciseController.deleteExercise)

export { exerciseRouter }