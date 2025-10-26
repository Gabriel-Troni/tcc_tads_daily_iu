import { Router } from "express";
import { validateJwt } from "../../../middlewares/validateJwt";
import { Profile } from "../../../types/ProfileEnum";
import { ExerciseController } from "../../../controllers/ExerciseController";

const router = Router();

router.get('/plan', validateJwt([Profile.ADMIN]), ExerciseController.getAllTrainingPlans);
router.post('/plan', validateJwt([Profile.ADMIN]), ExerciseController.addTrainingPlan);
router.put('/plan/:id', validateJwt([Profile.ADMIN]), ExerciseController.setTrainingPlan);
router.delete('/plan/:id', validateJwt([Profile.ADMIN]), ExerciseController.deleteTrainingPlan);

export default router;
