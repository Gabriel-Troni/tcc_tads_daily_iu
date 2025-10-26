import { Router } from "express";
import { validateJwt } from "../../middlewares/validateJwt";
import { Profile } from "../../types/ProfileEnum";
import { CategoryController } from "../../controllers/CategoryController";

const router = Router();

router.get('/', validateJwt([Profile.ADMIN]), CategoryController.getCategories);
router.post('/', validateJwt([Profile.ADMIN]), CategoryController.addCategories);
router.put('/:id', validateJwt([Profile.ADMIN]), CategoryController.setCategories);
router.delete('/:id', validateJwt([Profile.ADMIN]), CategoryController.deleteCategories);

export default router;
