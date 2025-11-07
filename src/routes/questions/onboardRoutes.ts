import { Router } from "express";
import { QuestionsController } from "../../controllers/QuestionsController";

const router = Router()

router.get('/', QuestionsController.getQuestions)
router.post('/', QuestionsController.sendAnswers)

export default router