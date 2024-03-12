const express=require("express");
const app=express();
const mongoose=require("mongoose");

mongoose.connect("url")   
const Userr=mongoose.model('users',{name:String, email:String, password:String});



const kitt=new Userr({name: 'Anurag', email:'anurag@gmail.com',password:'Dahijamanahi'});

kitt.save();
