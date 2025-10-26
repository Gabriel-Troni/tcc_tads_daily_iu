import { Router } from "express";
import { verifyJwt } from "../middlewares/verifyJwt";
import { Profile } from "../types/ProfileEnum";
import { ContentController } from "../controllers/ContentController";

const contentRouter = Router()

contentRouter.get("/saved", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ContentController.getSavedContent)
contentRouter.get("/:id", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ContentController.getContentById)
contentRouter.get("/", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ContentController.getContent)

contentRouter.post("/:id/repost", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ContentController.repostContent)
contentRouter.post("/:id/report", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ContentController.reportContent)
contentRouter.post("/", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ContentController.addContent)

contentRouter.patch("/:id/save", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ContentController.toggleSaved)
contentRouter.patch("/:id", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ContentController.toggleLike)

contentRouter.put("/:id", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ContentController.setContent)

contentRouter.delete("/:id", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), ContentController.deleteContent)

export { contentRouter }