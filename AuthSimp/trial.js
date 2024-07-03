const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello there</h1>");
})

app.post("/jk",function(req,res){
    const tm=req.body.tmm;
    console.log(tm);
})

app.listen(3000);