const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://anuragadmin:KIkBqYjyBQZXxJ33@cluster0.3sk1xst.mongodb.net/Udem")
const AdminSchema=new mongoose.Schema({
Username:String,
Password:String
})

const UserSchema=new mongoose.Schema({
Username:String,
Password:String,
PurchasedCourse:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Course'
}]
})

const CourseSchema=new mongoose.Schema({
title:String,
description:String,
price:Number,
imglink:String
})

const Admin=mongoose.model('Admin',AdminSchema)
const User=mongoose.model('User',UserSchema)
const Course=mongoose.model('Course',CourseSchema)

module.exports={
    Admin,
    User,
    Course
}