const { mongoose } = require('mongoose');
mongoose.connect("mongodb+srv://anuragadmin:KIkBqYjyBQZXxJ33@cluster0.3sk1xst.mongodb.net/TheTodo")


const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('createtodos',todoSchema);

module.exports={
    todo
}