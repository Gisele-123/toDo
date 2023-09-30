let mongoose=require('mongoose')
let todoSchema=new mongoose.Schema({
    text:{
        type:String,
        require: true
    }
})
module.exports=mongoose.model('ToDo',todoSchema)