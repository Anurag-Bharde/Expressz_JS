const {Admin}=require("../DB/datab")

function userMiddleware(req,res,next){
    const Username=req.headers.username;
    const Password=req.headers.password;

    Admin.findOne({
        Username,
        Password
    }).then(function(value){
        if(value){
            next();
        }
        else{
            res.status(403).json({msg:"Admin not found"})
        }
    })
}

module.exports=userMiddleware