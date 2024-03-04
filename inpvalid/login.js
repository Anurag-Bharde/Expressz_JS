const express=require("express")
const app=express();
const zod=require("zod");

const schema =zod.object({
    email:zod.string().email(),
    password:zod.string().min(8),
    country:zod.literal("IN").or(zod.literal("US"))
})

app.use(express.json());

app.post("/health",(req,res)=>{
    const {email,password,country}=req.body;
    const ans={email,password,country}
    const vue=schema.safeParse(ans);
    if(!vue.success){
        res.status(400).json({msg:"Wrong Input"})
    }
    res.send(vue);
    console.log(vue)
})

app.listen(3000);