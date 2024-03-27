const express=require('express');
const { createTodo,updateTodo } = require('./types');

const {mongocreate} = require("./datab")
const app=express();
 
app.use(express.json())


app.get("/todos",async (req,res)=>{
  const todos=await mongocreate.find({});

  res.json({
    todos
  })
})


app.post("/create",async (req,res)=>{
    const createdTodo=req.body;
    const q1=createTodo.safeParse(createdTodo);
    if(!q1.success){
      res.status(411).json({msg:"Todo Not created"})
      return 
    }
   const savings=await new mongocreate({
        title:createdTodo.title,
        description:createdTodo.description,
        completed:false
    })
    savings.save();
    res.json({Msg:"Data stored in database"})
})

app.put("/completed", async (req,res)=>{
    const updatedTodo=req.body;
    const q1=updateTodo.safeParse(updatedTodo);
    if(!q1.success){
        res.status(411).json({msg:"Sent wrong inputs"})
        return
    }

    await mongocreate.updateOne({
        _id: req.body.id
    },{
        completed: true
        })
        res.json({
            msg:'Tdod marked completed'
        })
    })


app.listen(3000);