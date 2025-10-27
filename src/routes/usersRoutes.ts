import { Router } from "express";
import { validateJwt } from "../middlewares/validateJwt";
import { Profile } from "../types/ProfileEnum";
import { UserController } from "../controllers/UserController";

const router = Router();

router.get('/:id', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), UserController.getUserById);
router.get('/workout/plan', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), UserController.getWorkoutPlan);

router.post('/login', UserController.login);
router.post('/password/reset', UserController.resetPassword);
router.post('/password/forgot', UserController.forgotPassword);
router.post('/workout/feedback', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), UserController.feedbackWorkout);
router.post('/workout/completion', UserController.completeWorkout);
router.post('/', UserController.addUser);

router.put('/', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), UserController.updateUser);

export default router;
