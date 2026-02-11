import { Router } from "express";
import { validateJwt } from "../../middlewares/validateJwt";
import { Role } from "../../types/RoleEnum";
import { ExerciseCategoryController } from "../../controllers/exercise/ExerciseCategoryController";
const router = Router();

router.get(
  "/",
  validateJwt([Role.ADMIN]),
  ExerciseCategoryController.getCategories
);
router.post(
  "/",
  validateJwt([Role.ADMIN]),
  ExerciseCategoryController.createCategory
);
router.put(
  "/:id",
  validateJwt([Role.ADMIN]),
  ExerciseCategoryController.updateCategory
);
router.delete(
  "/:id",
  validateJwt([Role.ADMIN]),
  ExerciseCategoryController.deleteCategory
);

export default router;
