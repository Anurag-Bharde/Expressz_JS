const { mongoose } = require('mongoose');
mongoose.connect("")


const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('createtodos',todoSchema);

module.exports={
    todo
}