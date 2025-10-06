import express from 'express'
import { dynamicCors } from './middlewares/dynamicCors'
import { env } from './utils/getEnv'
import { validateBaseUrl } from './middlewares/validateBaseUrl'
import { globalErrorHandler } from './middlewares/globalErrorHandler'
import { authRouter } from './routes/authRoutes'

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//app.use(THROTTLING)

app.use(validateBaseUrl)
app.use(env.BASE_URL, dynamicCors)

//app.use(JWT)

app.use(env.BASE_URL, authRouter);

app.use(globalErrorHandler)

app.listen(env.PORT, () => {
  console.log(`Aplicação rodando na porta ${env.PORT}`)
})