const express=require("express");
const app=express();
const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://anuragadmin:KIkBqYjyBQZXxJ33@cluster0.3sk1xst.mongodb.net/user_app?retryWrites=true&w=majority")   
const Userr=mongoose.model('users',{name:String, email:String, password:String});



const kitt=new Userr({name: 'Anurag', email:'anurag@gmail.com',password:'Dahijamanahi'});

kitt.save();
