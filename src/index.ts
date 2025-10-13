import express from 'express'
import { dynamicCors } from './middlewares/dynamicCors'
import { env } from './utils/getEnv'
import { validateBaseUrl } from './middlewares/validateBaseUrl'
import { globalErrorHandler } from './middlewares/globalErrorHandler'
import { limiter } from './middlewares/rateLimiting'
import { adminRouter } from './routes/adminRoutes'
import { exerciseRouter } from './routes/exerciseRoutes'
import { preferencesRouter } from './routes/preferencesRoutes'
import { diaryRouter } from './routes/diaryRoutes'
import { contactRouter } from './routes/contactRoutes'
import { questionsRouter } from './routes/questionsRoutes'
import { reportRouter } from './routes/reportRoutes'
import { categoryRouter } from './routes/categoryRoutes'
import { usersRoutes } from './routes/usersRoutes'
import { contentRouter } from './routes/contentRoutes'
import { commentsRouter } from './routes/commentsRoutes'
import { mediaRouter } from './routes/mediaRoutes'

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(limiter)

app.use(validateBaseUrl)
app.use(env.BASE_URL, dynamicCors)

app.use(`${env.BASE_URL}/admin/users`, adminRouter)
app.use(`${env.BASE_URL}/exercise`, exerciseRouter)
app.use(`${env.BASE_URL}/preferences`, preferencesRouter)
app.use(`${env.BASE_URL}/calendar`, diaryRouter)
app.use(`${env.BASE_URL}/contact`, contactRouter)
app.use(`${env.BASE_URL}/questions/onboard`, questionsRouter)
app.use(`${env.BASE_URL}/report`, reportRouter)
app.use(`${env.BASE_URL}/content/category`, categoryRouter)
app.use(`${env.BASE_URL}/users`, usersRoutes)
app.use(`${env.BASE_URL}/content/comments`, commentsRouter)
app.use(`${env.BASE_URL}/content`, contentRouter)
app.use(`${env.BASE_URL}/media`, mediaRouter)

app.use(globalErrorHandler)

app.listen(env.PORT, () => {
  console.log(`Aplicação rodando na porta ${env.PORT}`)
})