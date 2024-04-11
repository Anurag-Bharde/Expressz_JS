const express=require("express");
const app=express();
const bodyParse=require("body-parser")
const adminRout=require("./route/Admin");
const userRout=require("./route/User")

// app.use(bodyParse.json());
app.use("admin/",)


app.listen(3000);