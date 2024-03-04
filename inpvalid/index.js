const express=require("express");
const app=express();
const zod=require("zod")

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
})

app.listen(3000);