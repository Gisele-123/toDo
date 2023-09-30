let todoModel=require('../models/todoModel')
module.exports.getToDo=async(req,res)=>{
    let ToDo=await todoModel.find()
    res.send(ToDo)
}
module.exports.saveToDo=async(req,res)=>{
    let{text}=req.body
    await todoModel
    .create({text})
    .then((data)=>{
        console.log("Added successfully...");
        console.log(data);
        res.send(data)
    })
    .catch((err)=>console.log(err));
}
    module.exports.updateToDo=async (req,res)=>{
        let {_id,text}=req.body
        todoModel
        .findByIdAndUpdate(_id,{text})
        .then(()=>res.set(201).send("Updated Successfully..."))
        .catch ((err)=>console.log(err));
    }
    module.exports.deleteToDo=async(req,res)=>{
        let{_id}=req.body
        console.log('id --->',_id);
        todoModel
        .findByIdAndRemove(_id)
        .then(()=>res.set(201).send("Deleted successfully..."))
        .catch((err)=>console.log(err))
    } 