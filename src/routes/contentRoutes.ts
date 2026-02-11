import { Router } from "express";
import { validateJwt } from "../middlewares/validateJwt";
import { Role } from "../types/RoleEnum";
import { ContentController } from "../controllers/ContentController";

const router = Router();

router.get(
  "/saved",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  ContentController.getSavedContents
);
router.get(
  "/:id",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  ContentController.getContentById
);
router.get(
  "/",
  (req, res, next) => {
    if(!req.headers["x-profile"] || req.headers["x-profile"] == 'false') {
      return validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER])(req, res, next);
    }
    if(!req.headers["Authorization"] && !req.headers["authorization"]) {
      throw new Error("O token é obrigatório se x-profile for verdadeiro", { cause: 400 });
    }
    next();
  },
  ContentController.getContents
);

router.post(
  "/:id/repost",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  ContentController.repostContent
);
router.post(
  "/:id/report",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  ContentController.reportContent
);
router.post(
  "/",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  ContentController.createContent
);

router.patch(
  "/:id/save",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  ContentController.toggleSaved
);
router.patch(
  "/:id",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  ContentController.toggleLike
);

router.put(
  "/:id",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  ContentController.updateContent
);

router.delete(
  "/:id",
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  ContentController.deleteContent
);

export default router;
