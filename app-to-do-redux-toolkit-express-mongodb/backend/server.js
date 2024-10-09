import app from './app.js'
import dotenv from 'dotenv'

import { connectDB } from './config/db.js'
dotenv.config()
connectDB()

const port = process.env.PORT || 8001
const host = process.env.host || '127.0.0.1'
app.listen(port, host, ()=> console.log(`The server is listening on port ${port}`))
 