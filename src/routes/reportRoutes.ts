import { Router } from "express";
import { ReportController } from "../controllers/ReportController";

const router = Router()

router.get('/', ReportController.getReport)

export default router