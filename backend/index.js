const mongoose=require("mongoose")
const cors=require("cors")
const express=require("express")
const dotenv=require('dotenv')
const app=express()
const configureDB=require('./configureDB/db')
require('dotenv').config();
PORT=process.env.PORT
app.use(express.json())
dotenv.config()
configureDB()
app.listen(PORT,()=>{
    console.log("server running on port",PORT)
})