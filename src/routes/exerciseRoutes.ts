import { Router } from "express";
import { validateJwt } from "../middlewares/validateJwt";
import { Profile } from "../types/ProfileEnum";
import { ExerciseController } from "../controllers/exercise/ExerciseController";

const router = Router();

router.get("/", validateJwt([Profile.ADMIN]), ExerciseController.getExercises);
router.post("/", validateJwt([Profile.ADMIN]), ExerciseController.createExercise);
router.put(
  "/:id",
  validateJwt([Profile.ADMIN]),
  ExerciseController.updateExercise
);
router.delete(
  "/:id",
  validateJwt([Profile.ADMIN]),
  ExerciseController.deleteExercise
);

export default router;
