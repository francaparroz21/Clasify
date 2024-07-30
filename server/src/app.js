import express from 'express'
import morgan from "morgan"
import authRoutes from "./routes/auth.routes.js"

//start app
const app = express()

//use module morgan with config 'dev'
app.use(morgan("dev"))

app.use(express.json())

//use auth routes
app.use("/api" , authRoutes)

//export app
export default app