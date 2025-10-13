import { Router } from "express";
import { verifyJwt } from "../middlewares/verifyJwt";
import { Profile } from "../types/ProfileEnum";
import { CategoryController } from "../controllers/CategoryController";

const categoryRouter = Router()

categoryRouter.get("/", verifyJwt([Profile.ADMIN]), CategoryController.getCategories)
categoryRouter.post("/", verifyJwt([Profile.ADMIN]), CategoryController.addCategories)
categoryRouter.put("/:id", verifyJwt([Profile.ADMIN]), CategoryController.setCategories)
categoryRouter.delete("/:id", verifyJwt([Profile.ADMIN]), CategoryController.deleteCategories)

export { categoryRouter }