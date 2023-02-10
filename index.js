const express = require('express')
const app = express()

function mymiddleware (req,res,next){
    console.log("hi this is the middleware")
    next()
}

app.use(mymiddleware)

app.get("/",mymiddleware,(req,res)=>{
    res.send("hi this is the POST request")
})

app.get('/test',mymiddleware,(req,res)=>{
    res.send("hi this is the POST request")
})
app.post("/",(req,res)=>{
    res.send("hi this is the POST request")
})

app.put("/",(req,res)=>{
    res.send("hi this is the PUT request")
})

app.delete("/",(req,res)=>{
    res.send("hi this is the DELETE request")
})

// app.use(middleware)

const PORT = 3000
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))