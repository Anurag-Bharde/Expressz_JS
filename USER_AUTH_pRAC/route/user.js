const express=require("express");
const userRoute=express.Router();
const {User,Course}=require("../DB/datab")
const theMiddleware=require("../middleware/user")

userRoute.post("/signup",async(req,res)=>{
const Username=req.body.username;
const Password=req.body.password;
await User.create({
    Username,
    Password
})
res.status(200).json({msg:"The user is created"});
})

userRoute.get("/courses",async ( req,res)=>{
    const response=await Course.find({});
    res.json({course:response});
})

userRoute.post("/courses/:courseId",theMiddleware,async (req,res)=>{
    const courseId=req.params.courseId;
    const username=req.headers.username;

   await User.updateOne({
        Username: username
    },{
        "$push":{
         PurchasedCourse:courseId
        }
        
    });

    res.json({msg:"Purchase complete"})

})


userRoute.get('/purchasedCourse',theMiddleware,async(req,res)=>{
    const user=await User.findOne({
        usernamed: req.header.username
    })
    console.log(user)

    console.log(user.PurchasedCourse)
    const courses=await Course.find({
        _id: {
            "$in":user.PurchasedCourse
        }
    })
    res.json({
        course:courses
    })
})


module.exports=userRoute;