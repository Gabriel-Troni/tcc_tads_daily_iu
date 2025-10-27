import { Router } from "express";
import { validateJwt } from "../../middlewares/validateJwt";
import { Profile } from "../../types/ProfileEnum";
import { ExerciseCategoryController } from "../../controllers/exercise/ExerciseCategoryController";
const router = Router();

router.get(
  "/",
  validateJwt([Profile.ADMIN]),
  ExerciseCategoryController.getCategories
);
router.post(
  "/",
  validateJwt([Profile.ADMIN]),
  ExerciseCategoryController.createCategory
);
router.put(
  "/:id",
  validateJwt([Profile.ADMIN]),
  ExerciseCategoryController.updateCategory
);
router.delete(
  "/:id",
  validateJwt([Profile.ADMIN]),
  ExerciseCategoryController.deleteCategory
);

export default router;
