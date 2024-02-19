const express= require("express");
const app= express();

var users =[{
    name:'John',
    kidney:[{
        healthy: false
    },{
        healthy: true
    },{
        healthy: true
    }]
}];

// console.log(users[0].kidney[0])
app.use(express.json());
app.get("/", function(req,res){
   const a=users[0].kidney;
   let p=0;
   for(let m=0;m<users[0].kidney.length;m++){
    if(users[0].kidney[m].healthy==true){
    p+=1;
    }
   }
const kidnet=a.length
const healthykid=p
const unhealthykid=kidnet-healthykid
   res.json({
    kidnet,
    healthykid,
    unhealthykid
   })
})

app.post("/", function(req,res){
    const heal=req.body.heal;
    users[0].kidney.push({
        healthy: heal
    })
    res.json({
        msg: "Done"
    })
})

app.put("/", function(req,res){
    for(let i=0;i<users[0].kidney.length;i++){
        users[0].kidney[i].healthy=true;
    }
    res.json({
        kidney: "cured and healthy"
    })
})

app.delete("/", function(req,res){
    let newkid=[];
    for(let i=0;i<users[0].kidney.length;i++){
        if(users[0].kidney[i].healthy){
            newkid.push({
                healthy: true
            })
        }
    }
    users[0].kidney=newkid;
    res.json({
        msg:"the unhealthy were removed"
    })
})

app.listen(3000);