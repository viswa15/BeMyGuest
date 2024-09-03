import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import cors from 'cors'
import authRoute from './routes/authRoute.js'
import staticContentRoute from './routes/staticContentRoute.js'
import featuredWeddingRoute from './routes/featuredWeddingRoute.js'

//configure env
dotenv.config()

//database configuration
connectDB()

//rest object
const app = express()

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//routes
app.use('/auth',authRoute)
app.use('/static-content',staticContentRoute)
app.use("/weddings",featuredWeddingRoute);


//port
const PORT = process.env.PORT || 8080

//run listen 
app.listen(PORT,()=>{
    console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
})