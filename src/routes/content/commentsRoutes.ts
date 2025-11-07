import { Router } from "express";
import { validateJwt } from "../../middlewares/validateJwt";
import { Role } from "../../types/RoleEnum";
import { CommentsController } from "../../controllers/CommentsController";

const router = Router();

router.get(
  "/:id/replies",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  CommentsController.getCommentReplies
);
router.get(
  "/:id",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  CommentsController.getComments
);

router.post(
  "/",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  CommentsController.createComment
);

router.patch(
  "/:id",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  CommentsController.toggleLike
);

router.put(
  "/:id",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  CommentsController.updateComment
);

router.delete(
  "/:id",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  CommentsController.deleteComment
);

export default router;
