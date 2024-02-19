const xpress=require ("express");
const app=xpress();

function summer(n){
    let a=0;
    for(let m=0;m<=n;m++){
        a+=m;
    }
    return a;
}

app.get("/",function(req,res){
    const n=req.query.n;
    const ans=summer(n);
    res.send("The ans is"+ans);
})

app.listen(3002);