import { Router } from "express";
import { getUser,addUser,deleteUser,editUser } from "../controllers/Users.controller.js";

 export const indexRouter=Router()

 indexRouter.get("/users",getUser)
 indexRouter.post("/users/add",addUser)
 indexRouter.delete("/users/delete",deleteUser)
 indexRouter.post("/users/edit",editUser)

