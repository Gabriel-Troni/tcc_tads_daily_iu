import { Router } from "express";
import { ReportController } from "../controllers/ReportController";

const reportRouter = Router()

reportRouter.get("/", ReportController.getReport)

export { reportRouter }