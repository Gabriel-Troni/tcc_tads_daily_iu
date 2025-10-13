import { Router } from "express";
import { QuestionsController } from "../controllers/QuestionsController";

const questionsRouter = Router()

questionsRouter.get("/", QuestionsController.getQuestions)
questionsRouter.post("/", QuestionsController.sendAnswers)

export { questionsRouter }