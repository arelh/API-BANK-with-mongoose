import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

// const URL= `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS} @cluster0.n4xz03i.mongodb.net/?retryWrites=true&w=majority`

const URL= `mongodb+srv://jon:yaEh0kJ2ARdyokrv @cluster0.n4xz03i.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(URL,(err,mongoDbInstance)=>{
    if(err){
        throw Error("mongoDB connection error:"+err)
    }
    const {host,port,name}=mongoDbInstance
    console.log({host,port,name});
})