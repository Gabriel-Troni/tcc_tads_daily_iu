import { Router } from "express";
import { validateJwt } from "../middlewares/validateJwt";
import { Role } from "../types/RoleEnum";
import { UserController } from "../controllers/UserController";

const router = Router();

router.get(
  "/:id",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  UserController.getUserById
);
router.get(
  "/workout/plan",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  UserController.getWorkoutPlan
);

router.post("/login", UserController.login);
router.post("/password/reset", UserController.resetPassword);
router.post("/password/forgot", UserController.forgotPassword);
router.post(
  "/workout/feedback",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  UserController.feedbackWorkout
);
router.post("/workout/completion", UserController.completeWorkout);
router.post("/", UserController.addUser);

router.put(
  "/",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  UserController.updateUser
);

export default router;
