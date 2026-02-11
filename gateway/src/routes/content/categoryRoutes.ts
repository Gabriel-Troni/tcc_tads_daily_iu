import { Router } from "express";
import { validateJwt } from "../../middlewares/validateJwt";
import { Role } from "../../types/RoleEnum";
import { CategoryController } from "../../controllers/CategoryController";

const router = Router();

router.get("/", validateJwt([Role.ADMIN]), CategoryController.getCategories);
router.post(
  "/",
  validateJwt([Role.ADMIN]),
  CategoryController.createCategory
);
router.put(
  "/:id",
  validateJwt([Role.ADMIN]),
  CategoryController.updateCategory
);
router.delete(
  "/:id",
  validateJwt([Role.ADMIN]),
  CategoryController.deleteCategory
);

export default router;
