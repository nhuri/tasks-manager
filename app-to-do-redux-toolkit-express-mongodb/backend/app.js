import express from 'express'
import asyncHandler from 'express-async-handler'
import morgan from 'morgan'
import cors from 'cors'
import errorHandler, { AppError } from './middlware/errorHandler.js'
import userRouter from './routes/user.Routes.js'
import tasksRouter from './routes/tasks.Routes.js'
import cookieParser from 'cookie-parser'
const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use(cookieParser())

app.use('/api/tasks', tasksRouter)
app.use('/api/users', userRouter)


app.all('*',(req, res, next)=>{
   return next(new AppError(404,'Route not exist'))
})
app.use(errorHandler)



export default app