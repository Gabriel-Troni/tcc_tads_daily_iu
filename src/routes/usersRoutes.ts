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
router.post("/workout/completion", validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]), UserController.completeWorkout);
router.post("/", (req, res, next) => {
  if(req.headers["Authorization"])
    return validateJwt([Role.ADMIN])(req, res, next);
  next();
}, UserController.addUser);

router.put(
  "/:id",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  UserController.updateUser
);

export default router;
