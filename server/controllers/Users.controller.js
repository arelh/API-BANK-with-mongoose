export const getUser= (req,res)=>{
    try{
        res.send("hola")
    }catch(err){
        res.send(err.message)
    }
}