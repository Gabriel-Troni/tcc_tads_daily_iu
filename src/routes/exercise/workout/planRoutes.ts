import { Router } from "express";
import { validateJwt } from "../../../middlewares/validateJwt";
import { Role } from "../../../types/RoleEnum";
import { WorkoutPlanController } from "../../../controllers/exercise/WorkoutPlanController";

const router = Router();

router.get(
  "/",
  validateJwt([Role.ADMIN]),
  WorkoutPlanController.getWorkoutPlans
);
router.post(
  "/",
  validateJwt([Role.ADMIN]),
  WorkoutPlanController.createWorkoutPlan
);
router.put(
  "/:id",
  validateJwt([Role.ADMIN]),
  WorkoutPlanController.updateWorkoutPlan
);
router.delete(
  "/:id",
  validateJwt([Role.ADMIN]),
  WorkoutPlanController.deleteWorkoutPlan
);

export default router;
