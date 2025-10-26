import { Router } from "express";
import { validateJwt } from "../middlewares/validateJwt";
import { Profile } from "../types/ProfileEnum";
import { UserController } from "../controllers/UserController";

const router = Router();

router.get('/:id', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), UserController.getUser);
router.get('/workout/plan', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), UserController.getTrainingPlan);

router.post('/login', UserController.login);
router.post('/password/reset', UserController.resetPassword);
router.post('/password/forgot', UserController.forgotPassword);
router.post('/workout/feedback', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), UserController.feedbackTraining);
router.post('/workout/completion', UserController.completeTraining);
router.post('/', UserController.addUser);

router.put('/', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), UserController.setUser);

export default router;
