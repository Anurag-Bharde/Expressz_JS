const express=require("express");
const app=express();
const bodyParse=require("body-parser")
const adminRout=require("./route/Admin");
const userRout=require("./route/User")

// app.use(bodyParse.json());
app.use("admin/",)
//this is just a proof of work anbkc d the assign manet to change something


app.listen(3000);