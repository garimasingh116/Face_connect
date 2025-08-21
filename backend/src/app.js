 import express from "express";
 import {createServer} from "node:http";
 import {Server} from "socket.io";
 import mongoose from "mongoose";
 import cors from "cors"
 import {connectTosocket} from "./controllers/socketmanger.js"
 import userroutes from "./routes/userroutes.js"

 const app=express();
const server=createServer(app);
 const io=connectTosocket(server);

 app.set("port",(process.env.PORT||8080));
 app.use(cors());
 app.use(express.json({limit:"40kb"}));
 app.use(express.urlencoded({limit:"40kb",extended:true}))
 app.use("/api/v1/users",userroutes);


 const start=async()=>{
    app.set("mongo_user")
    const connectiondb=await mongoose.connect("mongodb+srv://garimasingh0316:YMLnm0n4E2vC7XkG@cluster0.agvgibn.mongodb.net/")
    console.log(`connection ${connectiondb.connection.host}`)
    server.listen(app.get("port"),()=>{
    console.log("hello");
 })}
 start();
 app.get("/hello",(req,res)=>{
    res.json({
        "hello":"me"
    });
 })
