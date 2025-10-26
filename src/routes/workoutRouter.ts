import { Router } from "express";
import { verifyJwt } from "../middlewares/verifyJwt";
import { Profile } from "../types/ProfileEnum";
import { ExerciseController } from "../controllers/ExerciseController";

const workoutRouter = Router()

workoutRouter.get("/", verifyJwt([Profile.ADMIN]), ExerciseController.getWorkouts)
workoutRouter.post("/", verifyJwt([Profile.ADMIN]), ExerciseController.addWorkout)
workoutRouter.put("/:id", verifyJwt([Profile.ADMIN]), ExerciseController.setWorkout)
workoutRouter.delete('/:id', verifyJwt([Profile.ADMIN]), ExerciseController.deleteWorkout)

export { workoutRouter }