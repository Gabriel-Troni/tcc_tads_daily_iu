import { Router } from "express";
import { validateJwt } from "../../middlewares/validateJwt";
import { Profile } from "../../types/ProfileEnum";
import { ContentController } from "../../controllers/ContentController";

const router = Router();

router.get('/saved', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ContentController.getSavedContent);
router.get('/:id', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ContentController.getContentById);
router.get('/', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ContentController.getContent);

router.post('/:id/repost', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ContentController.repostContent);
router.post('/:id/report', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ContentController.reportContent);
router.post('/', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ContentController.addContent);

router.patch('/:id/save', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ContentController.toggleSaved);
router.patch('/:id', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ContentController.toggleLike);

router.put('/:id', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ContentController.setContent);

router.delete('/:id', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ContentController.deleteContent);

export default router;
