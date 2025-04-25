import express from 'express'
import dotenv from 'dotenv'
import { connectToDb } from './Connection/db.js'
import { authRoutes } from './Routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import {ticketRouter} from './Routes/ticket.routes.js'
import {dashboardRoutes} from './Routes/dashboard.routes.js'

import {notesRouter} from './Routes/notes.routes.js'

dotenv.config() 
const app=express()
const PORT=process.env.PORT


// middelewares
app.use(express.json())
app.use(cookieParser())
app.use(cors())


// auth route
app.use("/api/auth",authRoutes)

// room routes
app.use("/api/tickets",ticketRouter)

// app.use('/api/users', userRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.use('/api/notes', notesRouter);






app.listen( PORT || 8000,()=>{
    console.log(`server started at ${PORT}`)
    connectToDb()
})