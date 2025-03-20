// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
// import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()

/* 
import express from 'express';
import { DB_NAME } from './constent';
const app =express();
(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR",error);
            throw error
  
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
            {process.env.PORT}
        })

    } catch (error) {
        console.error("ERROR",error);
       throw error 
    }

})()
*/

// old practice
// require('dotenv').config()
// const express =require('express')
// const app =express()
// // const port =3000
// const data= {name:'raman',desig:'sd'}
// app.get('/',(req,res)=>{
//     res.send('hello world')
// }
// )
// app.get('/twitter',(req,res)=>{
//     res.send('hii this pragati')
// })
// app.get('/login',(req,res)=>{
//     res.send('<h1>please login at chai aur code</h1>')
// })
// app.get('/youtube',(req,res)=>{
//     res.send('')
    
// })
// app.get('/github',(req,res)=>{
//     res.json(data)
// })
// app.listen(process.env.PORT,()=>{
//     console.log(`Example app listening on port ${process.env.PORT}`);
    
// })