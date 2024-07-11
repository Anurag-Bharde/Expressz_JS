const {User}=require("../DB/datab")

function adminMiddleware(req,res,next){
    const Username=req.headers.username;
    const Password=req.headers.password;

    User.findOne({
        Username,
        Password
    }).then(function(value){
        if(value){
            next();
        }
        else{
            res.status(403).json({msg:"User not found"})
        }
    })
}

module.exports=adminMiddleware;