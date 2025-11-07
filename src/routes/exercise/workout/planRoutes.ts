import { Router } from "express";
import { validateJwt } from "../../../middlewares/validateJwt";
import { Role } from "../../../types/RoleEnum";
import { WorkoutPlanController } from "../../../controllers/exercise/WorkoutPlanController";

const router = Router();

router.get(
  "/plan",
  validateJwt([Role.ADMIN]),
  WorkoutPlanController.getWorkoutPlans
);
router.post(
  "/plan",
  validateJwt([Role.ADMIN]),
  WorkoutPlanController.createWorkoutPlan
);
router.put(
  "/plan/:id",
  validateJwt([Role.ADMIN]),
  WorkoutPlanController.updateWorkoutPlan
);
router.delete(
  "/plan/:id",
  validateJwt([Role.ADMIN]),
  WorkoutPlanController.deleteWorkoutPlan
);

export default router;
