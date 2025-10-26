import express from "express";
import { validateCors } from "./middlewares/validateCors";
import { env } from "./utils/getEnv";
import { validateBaseUrl } from "./middlewares/validateBaseUrl";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import { limiter } from "./middlewares/rateLimiting";
import router from "./routes";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(limiter);

app.use(validateBaseUrl);
app.use(env.BASE_URL, validateCors);

app.use(env.BASE_URL, router);

app.use((req, res) => {
  res.status(404).json({ message: `Rota ${req.method} ${req.path} não encontrada` });
});

app.use(globalErrorHandler);

app.listen(env.PORT, () => {
  console.log(`Aplicação rodando na porta ${env.PORT}`);
});
