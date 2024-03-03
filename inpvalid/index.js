const express=require("express");
const app=express();

app.use(express.json());

function checkinp(req,res,next){
   
}

app.post("/health", checkinp,(req,res)=>{
    const kidey =req.body.kidneys;
    const kidneylength=kidey.length;

    res.send("kidney is fine"+kidneylength);
})

app.listen(3000);