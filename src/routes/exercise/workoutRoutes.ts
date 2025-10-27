import { Router } from "express";
import { validateJwt } from "../../middlewares/validateJwt";
import { Profile } from "../../types/ProfileEnum";
import { WorkoutController } from "../../controllers/exercise/WorkoutController";

const router = Router();

router.get("/", validateJwt([Profile.ADMIN]), WorkoutController.getWorkouts);
router.post("/", validateJwt([Profile.ADMIN]), WorkoutController.createWorkout);
router.put("/:id", validateJwt([Profile.ADMIN]), WorkoutController.updateWorkout);
router.delete(
  "/:id",
  validateJwt([Profile.ADMIN]),
  WorkoutController.deleteWorkout
);

export default router;
