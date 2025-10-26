import { Router } from "express";
import { verifyJwt } from "../middlewares/verifyJwt";
import { Profile } from "../types/ProfileEnum";
import { ExerciseController } from "../controllers/ExerciseController";

const exerciseAttributeRouter = Router()

exerciseAttributeRouter.get('/', verifyJwt([Profile.ADMIN]), ExerciseController.getAttributes)
exerciseAttributeRouter.post('/', verifyJwt([Profile.ADMIN]), ExerciseController.addAttribute)
exerciseAttributeRouter.put('/:id', verifyJwt([Profile.ADMIN]), ExerciseController.setAttribute)
exerciseAttributeRouter.delete('/:id', verifyJwt([Profile.ADMIN]), ExerciseController.deleteAttribute)

export { exerciseAttributeRouter }