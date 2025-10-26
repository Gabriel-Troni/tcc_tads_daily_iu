import { Router } from "express";
import { validateJwt } from "../../middlewares/validateJwt";
import { Profile } from "../../types/ProfileEnum";
import { ExerciseController } from "../../controllers/ExerciseController";

const router = Router()

router.get('/', validateJwt([Profile.ADMIN]), ExerciseController.getWorkouts)
router.post('/', validateJwt([Profile.ADMIN]), ExerciseController.addWorkout)
router.put('/:id', validateJwt([Profile.ADMIN]), ExerciseController.setWorkout)
router.delete('/:id', validateJwt([Profile.ADMIN]), ExerciseController.deleteWorkout)

export default router