import { Router } from "express";
import { validateJwt } from "../../middlewares/validateJwt";
import { Profile } from "../../types/ProfileEnum";
import { CommentsController } from "../../controllers/CommentsController";

const router = Router();

router.get('/:id/replies', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), CommentsController.getCommentReplies);
router.get('/:id', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), CommentsController.getComments);

router.post('/', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), CommentsController.createComment);

router.patch('/:id', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), CommentsController.toggleLike);

router.put('/:id', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), CommentsController.updateComment);

router.delete('/:id', validateJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), CommentsController.deleteComment);

export default router;
