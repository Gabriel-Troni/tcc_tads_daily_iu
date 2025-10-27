import { Router } from "express";
import { validateJwt } from "../../../middlewares/validateJwt";
import { Profile } from "../../../types/ProfileEnum";
import { WorkoutPlanController } from "../../../controllers/exercise/WorkoutPlanController";

const router = Router();

router.get(
  "/plan",
  validateJwt([Profile.ADMIN]),
  WorkoutPlanController.getWorkoutPlans
);
router.post(
  "/plan",
  validateJwt([Profile.ADMIN]),
  WorkoutPlanController.createWorkoutPlan
);
router.put(
  "/plan/:id",
  validateJwt([Profile.ADMIN]),
  WorkoutPlanController.updateWorkoutPlan
);
router.delete(
  "/plan/:id",
  validateJwt([Profile.ADMIN]),
  WorkoutPlanController.deleteWorkoutPlan
);

export default router;
