import { BankUsers} from "../models/user.models.js"
// import { addUserToMongo } from "../services/users.mongoose.js";

export const getUser=  (req,res)=>{
    try{
         res.send('Hola');
        // const users= BankUsers.find({})
        // res.status(200).send(users);
    }catch(err){
        res.send(err.message)
    }
}
export const addUser= async (req,res)=>{
    try{
    const body=req.body
    const newUser=await BankUsers.create(body)
    res.status(201).send(newUser);
    
    }catch(err){
        res.send(err.message)
    }
}



export const deleteUser= (req,res)=>{
    try{
        res.send("hola")
    }catch(err){
        res.send(err.message)
    }
}
export const editUser= (req,res)=>{
    try{
        res.send("hola")
    }catch(err){
        res.send(err.message)
    }
}