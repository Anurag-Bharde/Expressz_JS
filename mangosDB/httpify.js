const express=require("express");
const app=express();
const mongoose=require("mongoose");

app.use(express.json());
mongoose.connect("url/DB")   
const userr=mongoose.model('user',{name:String, email:String, password:String});


app.post("/userlog",async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const email=req.body.email;
  
    const userexist=await userr.findOne({name:username})
    if(userexist){
       return res.status(403).json({MSG:"User already exist"})
    }

    const used=new userr({
        name:username,
        email:email,
        password:password
    })
    used.save();
    res.json({
      "MSG":"USer created successfully"
    })
})

app.listen(3000);