import { Router } from "express";
import { verifyJwt } from "../middlewares/verifyJwt";
import { Profile } from "../types/ProfileEnum";
import { CommentsController } from "../controllers/CommentsController";

const commentsRouter = Router()

commentsRouter.get("/:id/replies", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), CommentsController.getCommentReplies)
commentsRouter.get("/:id", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), CommentsController.getCommentsByContentId)

commentsRouter.post("/", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), CommentsController.addComment)

commentsRouter.patch("/:id", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), CommentsController.toggleLike)

commentsRouter.put("/:id", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), CommentsController.setComment)

commentsRouter.delete("/:id", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), CommentsController.deleteComment)

export { commentsRouter }