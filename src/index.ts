import express from "express";
import { validateCors } from "./middlewares/validateCors";
import { env } from "./utils/getEnv";
import { validateBaseUrl } from "./middlewares/validateBaseUrl";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import { limiter } from "./middlewares/rateLimiting";
import router from "./routes";
import { MediaController } from "./controllers/MediaController";
import { validateJwt } from "./middlewares/validateJwt";
import { Role } from "./types/RoleEnum";

const app = express();

app.use(validateBaseUrl);
app.use(env.BASE_URL, validateCors);

app.set("trust proxy", 1);
app.use(limiter);

app.post(
  `${env.BASE_URL}/media/upload`,
  validateJwt([Role.ADMIN, Role.PROFESSIONAL, Role.USER]),
  MediaController.uploadMedia
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(env.BASE_URL, router);

app.use((req, res) => {
  res
    .status(404)
    .json({ message: `Route ${req.method} ${req.path} not found` });
});

app.use(globalErrorHandler);

app.listen(3030, () => {
  console.log(`Aplicação rodando na porta 3030`);
});
