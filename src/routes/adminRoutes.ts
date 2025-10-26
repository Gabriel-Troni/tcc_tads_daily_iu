import { Router } from "express";
import { validateJwt } from "../middlewares/validateJwt";
import { Profile } from "../types/ProfileEnum";
import { AdminController } from "../controllers/AdminController";

const router = Router();

router.get('/users', validateJwt([Profile.ADMIN]), AdminController.getUsers);
router.get('/reports', validateJwt([Profile.ADMIN]), AdminController.getReports);
router.post('/users/role', validateJwt([Profile.ADMIN]), AdminController.setUserRole);
router.post('/reports/validate', validateJwt([Profile.ADMIN]), AdminController.validateReport);
router.post('/reports/strike', validateJwt([Profile.ADMIN]), AdminController.applyStrike);

export default router;
