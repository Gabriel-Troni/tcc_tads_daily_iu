import { Router } from "express";
import { verifyJwt } from "../middlewares/verifyJwt";
import { Profile } from "../types/ProfileEnum";
import { ExerciseController } from "../controllers/ExerciseController";

const exerciseCategoryRouter = Router()

exerciseCategoryRouter.get('/', verifyJwt([Profile.ADMIN]), ExerciseController.getExerciseCategories)
exerciseCategoryRouter.post('/', verifyJwt([Profile.ADMIN]), ExerciseController.addExerciseCategory)
exerciseCategoryRouter.put('/:id', verifyJwt([Profile.ADMIN]), ExerciseController.setExerciseCategory)
exerciseCategoryRouter.delete('/:id', verifyJwt([Profile.ADMIN]), ExerciseController.deleteExerciseCategory)

export { exerciseCategoryRouter }