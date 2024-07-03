const mongoose =require('mongoose');

mongoose.connect('url');


const AdminSchema=new mongoose.Schema({
    username:String,
    password:String
})

const Admin=mongoose.model('Admin', AdminSchema);

module.exports{
    
}