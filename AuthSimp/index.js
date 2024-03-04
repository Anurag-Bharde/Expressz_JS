const express =require("express");
const app=express();

function timme(req,res,next){
    req.a=new Date().getTime();
    next();
}

app.use(timme)

app.get("/health",function(req,res){
    const username=req.headers.username;
    const password=req.headers.password;
    const kidneyin=req.query.kidneyin;

    if(username!="abzz" || password!="abzz"){
        res.status(400).json({"msg":"Something is wrong"})
        return
    }
    
    if(kidneyin !=1 && kidneyin!=2){
        res.status(400).json({"msg":"Wrong Input"})
        return
    }
    res.json({
        msg:"kid is fine"
    })
    const r=new Date().getTime();
    console.log(r-req.a);
});

app.listen(3000);