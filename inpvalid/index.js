const express=require("express");
const app=express();
const zod=require("zod")

function timme(req,res,next){
  req.a=new Date().getTime();
  next();
}

app.use(timme)

const schema=zod.array(zod.number());
app.use(express.json());

app.post("/health",(req,res)=>{
    const kidney =req.body.kidney;
    const response=schema.safeParse(kidney);
  if(!response.success){
    res.status(400).json({msg:"Wrong kind of input"});
  }
   else{ res.send({
        response
    })
}
const r=new Date().getTime();
console.log(r-req.a);
})

app.listen(3000);