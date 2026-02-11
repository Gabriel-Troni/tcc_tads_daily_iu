import { Router } from "express";
import { validateJwt } from "../../middlewares/validateJwt";
import { Role } from "../../types/RoleEnum";
import { ExerciseAttributeController } from "../../controllers/exercise/ExerciseAttributeController";

const router = Router();

router.get(
  "/",
  validateJwt([Role.ADMIN]),
  ExerciseAttributeController.getAttributes
);
router.post(
  "/",
  validateJwt([Role.ADMIN]),
  ExerciseAttributeController.createAttribute
);
router.put(
  "/:id",
  validateJwt([Role.ADMIN]),
  ExerciseAttributeController.updateAttribute
);
router.delete(
  "/:id",
  validateJwt([Role.ADMIN]),
  ExerciseAttributeController.deleteAttribute
);

export default router;
