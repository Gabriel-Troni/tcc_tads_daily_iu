import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

const authRouter = Router()

authRouter.post("/login", AuthController.login);
//router.post("/logout", verifyJWT(["CLIENTE", "FUNCIONARIO"]), autenticacaoController.logout);

export { authRouter }