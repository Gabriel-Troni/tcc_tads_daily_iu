import { Router } from "express";
import { validateJwt } from "../middlewares/validateJwt";
import { Role } from "../types/RoleEnum";
import { ExerciseController } from "../controllers/exercise/ExerciseController";

const router = Router();

router.get("/", validateJwt([Role.ADMIN]), ExerciseController.getExercises);
router.post(
  "/",
  validateJwt([Role.ADMIN]),
  ExerciseController.createExercise
);
router.put(
  "/:id",
  validateJwt([Role.ADMIN]),
  ExerciseController.updateExercise
);
router.delete(
  "/:id",
  validateJwt([Role.ADMIN]),
  ExerciseController.deleteExercise
);

export default router;
