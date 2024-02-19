const express=require ("express");
const app=express();
const tr=express();

tr.get("/",function(req,res){
    res.send("<h1>hello . world . !</h1>");
})

app.get("/",function(req,res){
    res.send("<h1>hello . world . Abz!</h1>");
})

app.listen(3000);

tr.listen(3001);