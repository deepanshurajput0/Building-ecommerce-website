import express from "express"
import ConnectDB from "./config/db.js"
import dotenv from "dotenv"
import juiceRoutes from './routes/juiceRoute.js'
import userRoutes from './routes/userRoutes.js'
import cloudinary from 'cloudinary'
import cookieParser from "cookie-parser"
import cors from 'cors'
const app = express()

dotenv.config({})

const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
cloudinary.v2.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})


app.use('/api/v1/juice',juiceRoutes)
app.use('/api/v1/user',userRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
    ConnectDB()
})





