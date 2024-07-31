import express from 'express'
import morgan from "morgan"
import authRoutes from "./routes/auth.routes.js"
import cookieParser from 'cookie-parser'
import taskRoutes from "./routes/tasks.routes.js"

//start app
const app = express()

//use module morgan with config 'dev'
app.use(morgan("dev"))

//allow json 
app.use(express.json())

//use cookie parser for token :D
app.use(cookieParser())

//use auth routes
app.use("/api", authRoutes)
app.use("/api", taskRoutes)


//export app
export default app