import { Router } from "express";
import { validateJwt } from "../middlewares/validateJwt";
import { Role } from "../types/RoleEnum";
import { AdminController } from "../controllers/AdminController";

const router = Router();

router.get("/users", validateJwt([Role.ADMIN]), AdminController.getUsers);
router.get(
  "/reports",
  validateJwt([Role.ADMIN]),
  AdminController.getReports
);
router.post(
  "/users/role",
  validateJwt([Role.ADMIN]),
  AdminController.setUserRole
);
router.patch(
  "/users/status",
  validateJwt([Role.ADMIN]),
  AdminController.setUserStatus
);
router.post(
  "/reports/validate",
  validateJwt([Role.ADMIN]),
  AdminController.validateReport
);
router.post(
  "/reports/strike",
  validateJwt([Role.ADMIN]),
  AdminController.applyStrike
);

export default router;
