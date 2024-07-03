const express=require("express");
const app= express();
let count=0;

app.use((req,res,next)=>{
    count++;
    next();
})
app.get("/dune",log1,log2,(req,res)=>{
    // const username=req.body;
    res.send("<h1>username</h1>");    
    console.log("DONE HOGAYA Ji")
    console.log(count)
}
)

app.get("/done/:sad",(req,res)=>{
  const usern=req.params.sad;
  res.send(`the reques is send to : ${usern}`)
})
function log1(req,res,next){
    console.log("used 1 func")
    next();
  }
  function log2(req,res,next){
    console.log("used 2 func")
    next();
  }
  
app.get("/slash",(req,res)=>{
    const tem=req.headers['username'];
    res.send(`the username is ${tem}`);
})

app.get("/stds",(req,res)=>{
    const quer1=req.query.v1;
    const quer2=req.query.v2;
    res.send(`${quer1}  ,  ${quer2}`)
})

app.listen(3000);