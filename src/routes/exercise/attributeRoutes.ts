import { Router } from "express";
import { validateJwt } from "../../middlewares/validateJwt";
import { Profile } from "../../types/ProfileEnum";
import { ExerciseAttributeController } from "../../controllers/exercise/ExerciseAttributeController";

const router = Router();

router.get("/", validateJwt([Profile.ADMIN]), ExerciseAttributeController.getAttributes);
router.post("/", validateJwt([Profile.ADMIN]), ExerciseAttributeController.createAttribute);
router.put(
  "/:id",
  validateJwt([Profile.ADMIN]),
  ExerciseAttributeController.updateAttribute
);
router.delete(
  "/:id",
  validateJwt([Profile.ADMIN]),
  ExerciseAttributeController.deleteAttribute
);

export default router;
