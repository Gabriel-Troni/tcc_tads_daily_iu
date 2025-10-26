import { Router } from "express";
import { validateJwt } from "../../middlewares/validateJwt";
import { Profile } from "../../types/ProfileEnum";
import { ExerciseController } from "../../controllers/ExerciseController";

const router = Router();

router.get('/', validateJwt([Profile.ADMIN]), ExerciseController.getAttributes);
router.post('/', validateJwt([Profile.ADMIN]), ExerciseController.addAttribute);
router.put('/:id', validateJwt([Profile.ADMIN]), ExerciseController.setAttribute);
router.delete('/:id', validateJwt([Profile.ADMIN]), ExerciseController.deleteAttribute);

export default router;
