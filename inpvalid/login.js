const express=require("express")
const app=express();
const zod=require("zod");

const schem=zod.object({
    username:zod.string().max(5,{ message: "Must be 5 or more characters long" }),
    pass:zod.string().endsWith("tm",{message: "password should end with string tm"}),
    age:zod.number().positive()
})

app.use(express.json())

app.post("/xuz",(req,res)=>{
    console.log(1)
    const {username,pass,age}=req.body
    const tear={username,pass,age}
    console.log(2)
    const chicker=schem.safeParse(tear);
    console.log(3)
    if(!chicker.success){
        console.log(4)
        return res.status(404).json({msg:"false insformation"})
    }
    console.log(5)
    res.send(tear);
   console.log("done");
// res.send("<h1>hello</h1>")
//   console.log("khaou")
})
app.listen(3000);