const express = require('express')
// console.log(express)
const path = require('path')
const xyz = express()

xyz.use(express.static(path.join(__dirname,'public')))

// app.get("/",(req,res)=>{
//     res.send("<h1>hello world</h1>")
// })

const PORT = 3000
xyz.listen(PORT,()=>console.log(`Server is running at ${PORT}`))