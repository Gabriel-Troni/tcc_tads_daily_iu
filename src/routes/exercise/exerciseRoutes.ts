import { Router } from "express";
import { validateJwt } from "../../middlewares/validateJwt";
import { Profile } from "../../types/ProfileEnum";
import { ExerciseController } from "../../controllers/ExerciseController";

const router = Router()

router.get('/', validateJwt([Profile.ADMIN]), ExerciseController.getExercises)
router.post('/', validateJwt([Profile.ADMIN]), ExerciseController.addExercise)
router.put('/:id', validateJwt([Profile.ADMIN]), ExerciseController.setExercise)
router.delete('/:id', validateJwt([Profile.ADMIN]), ExerciseController.deleteExercise)

export default router