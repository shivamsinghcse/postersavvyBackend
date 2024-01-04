import express from "express";
const app= express();
app.use(express.json())
app.get('/',(req, res)=>{
    console.log('Hello from the server');
    res.json({msg: "hello api"})
})
app.listen(3000, (req,res)=>{
    console.log("server is running on port 3000");
})