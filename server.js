const express=require('express');
const app=express();
const dotenv=require("dotenv").config();

const {dbConnect}=require('./Src/utils/db')


const port=process.env.PORT;

dbConnect();

app.use('/api', require('./Src/Router/Dasboard/CategoryRouter'));

app.listen(port,()=>{
    console.log(`Server is Running Successful Port on ${port}`)
})

app.get("/h1",(req,res)=>{
    res.send("Hello World");
})