const express=require('express');
const app=express();
const port=3000;

app.get('/users/:username',function(req,res){
    const name= req.params.username;
    res.send(`user profile for ${name}`);
})

app.listen(port,function(){
    console.log(`The application is running on the port ${port}`);
});
