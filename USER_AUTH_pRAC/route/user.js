const express=require("express");
const userRoute=express.Router();
const theMiddleware=require("../middleware/user")

userRoute.post("/signup",(req,res)=>{
const Username=req.body.username;
const Password=req.body.password;

})

module.exports=userRoute;