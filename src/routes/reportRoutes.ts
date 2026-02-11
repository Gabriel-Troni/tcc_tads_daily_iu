import { Router } from "express";
import { ReportController } from "../controllers/ReportController";
import { validateJwt } from "../middlewares/validateJwt";
import { Role } from "../types/RoleEnum";

const router = Router()

router.get('/', validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]), ReportController.getReport)

export default router