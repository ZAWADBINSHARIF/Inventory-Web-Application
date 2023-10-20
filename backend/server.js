// external import
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import cors from 'cors'

// internal import
import dbConnection from './configs/dbConnection.js'
import productRoute from './routers/productRoute.js'
import transactionRoute from './routers/transactionRoute.js'

// for getting the values of .env file
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

// database connection
dbConnection()

// allow cors cross orgin
app.use(cors(corsOptions))

// for getting cookies
app.use(cookieParser())

// for getting json data
app.use(express.json())

// for getting form data values
app.use(express.urlencoded({ extended: true }))


// all routers
app.use('/', productRoute)
app.use('/transaction', transactionRoute)


mongoose.connection.once('open', () => {
    console.log('Database is connected')
    app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`))
})