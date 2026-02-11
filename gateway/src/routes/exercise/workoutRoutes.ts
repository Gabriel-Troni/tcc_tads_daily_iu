import { Router } from "express";
import { validateJwt } from "../../middlewares/validateJwt";
import { Role } from "../../types/RoleEnum";
import { WorkoutController } from "../../controllers/exercise/WorkoutController";

const router = Router();

router.get("/", validateJwt([Role.ADMIN]), WorkoutController.getWorkouts);
router.post("/", validateJwt([Role.ADMIN]), WorkoutController.createWorkout);
router.put(
  "/:id",
  validateJwt([Role.ADMIN]),
  WorkoutController.updateWorkout
);
router.delete(
  "/:id",
  validateJwt([Role.ADMIN]),
  WorkoutController.deleteWorkout
);

export default router;
