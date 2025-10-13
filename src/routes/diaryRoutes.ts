import { Router } from "express";
import { verifyJwt } from "../middlewares/verifyJwt";
import { Profile } from "../types/ProfileEnum";
import { DiaryController } from "../controllers/DiaryController";

const diaryRouter = Router()

diaryRouter.get("/", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), DiaryController.getDiary)
diaryRouter.put("/", verifyJwt([Profile.ADMIN, Profile.PROFESSIONAL, Profile.USER]), DiaryController.setDiary)

export { diaryRouter }