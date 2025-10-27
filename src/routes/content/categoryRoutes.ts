import { Router } from "express";
import { validateJwt } from "../../middlewares/validateJwt";
import { Profile } from "../../types/ProfileEnum";
import { CategoryController } from "../../controllers/CategoryController";

const router = Router();

router.get('/', validateJwt([Profile.ADMIN]), CategoryController.getCategories);
router.post('/', validateJwt([Profile.ADMIN]), CategoryController.createCategory);
router.put('/:id', validateJwt([Profile.ADMIN]), CategoryController.updateCategory);
router.delete('/:id', validateJwt([Profile.ADMIN]), CategoryController.deleteCategory);

export default router;
