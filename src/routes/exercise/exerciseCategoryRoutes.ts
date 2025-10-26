import { Router } from "express";
import { validateJwt } from "../../middlewares/validateJwt";
import { Profile } from "../../types/ProfileEnum";
import { ExerciseController } from "../../controllers/ExerciseController";

const router = Router()

router.get('/', validateJwt([Profile.ADMIN]), ExerciseController.getExerciseCategories)
router.post('/', validateJwt([Profile.ADMIN]), ExerciseController.addExerciseCategory)
router.put('/:id', validateJwt([Profile.ADMIN]), ExerciseController.setExerciseCategory)
router.delete('/:id', validateJwt([Profile.ADMIN]), ExerciseController.deleteExerciseCategory)

export default router