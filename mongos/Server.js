const express=require('express')
const db=require('./config/db')
const app=express()

app.listen(8000,()=>{
    console.log('server listen')
})