import path from "path"; 
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"


import authRoutes from "./routes/auth.route.js"
import messagesRoutes from "./routes/messages.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDb from "./db/connectTomongodb.js"
import cors from 'cors';
import {app, server} from './socket/socket.js'

const __dirname= path.resolve()
dotenv.config();
const PORT=  5000 ;


app.use(cors());
app.use(express.json());//to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());//to parse the cookies in protectRoute 


app.use("/api/auth", authRoutes)//middleware 
app.use("/api/messages", messagesRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req, res)=>{
    res.sendFile(path.join(__dirname,"frontend/dist/index.html"))
})
server.listen(PORT, ()=>{
    connectToMongoDb()
    console.log(`Hlo World ${PORT}`)
})



// app.get("/", (req, res)=>{
//     res.send(`Hlo World! ${PORT}`)
//     console.log(`I am Naman Dubey `)
// })

