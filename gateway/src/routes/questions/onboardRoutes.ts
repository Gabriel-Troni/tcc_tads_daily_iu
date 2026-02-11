import { Router } from "express";
import { QuestionsController } from "../../controllers/QuestionsController";
import { validateJwt } from "../../middlewares/validateJwt";
import { Role } from "../../types/RoleEnum";

const router = Router()

router.get('/', (req, res, next) => {
  if(req.headers["Authorization"])
    return validateJwt([Role.USER, Role.PROFESSIONAL, Role.ADMIN])(req, res, next);
  next();
}, QuestionsController.getQuestions)

router.post('/', (req, res, next) => {
  if(req.headers["Authorization"])
    return validateJwt([Role.USER, Role.PROFESSIONAL, Role.ADMIN])(req, res, next);
  next();
}, QuestionsController.sendAnswers)

export default router