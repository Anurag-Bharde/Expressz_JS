const express=require ("express");
const rateLimites=require("express-rate-limit")
const app=express();




const limiterr=rateLimites({
    windowMs:5000,
    max: 5,
    message: "too many req"
})

app.use(limiterr)
app.get("/",function(req,res){
    res.send("aajab");
})

app.listen(3000);

