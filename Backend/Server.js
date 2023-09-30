let express=require('express')
let mongoose=require('mongoose')
let cors=require('cors')
let routes=require('./routes/todoRouter')
require('dotenv').config()

let app=express()
let PORT=process.env.port|| 8040
app.use(express.json())
app.use(cors())
mongoose
 .connect("mongodb://127.0.0.1/ToDoAct")
 .then(()=>console.log(`Connected to mongoDB...`))
 .catch((err)=>console.log(err))
app.use(routes)
app.listen(PORT,()=>console.log(`Listening on :${PORT}`))
// ,{
//    useNewUrlParser:true,
//    useUnifiedTopology:true,
// }