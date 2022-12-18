import { Router } from "express";
import { getUser,addUser,deleteUser,editUser,getUserById, deposite,transferCash } from "../controllers/Users.controller.js";

 export const indexRouter=Router()

 indexRouter.get("/users",getUser)
 indexRouter.get("/users/:id",getUserById)
 indexRouter.post("/users/add",addUser)
 indexRouter.post("/users/transfer/:firstId/to/:secondId",transferCash)
 indexRouter.delete("/users/delete/:id",deleteUser)
 indexRouter.patch("/users/edit/:id",editUser)
 indexRouter.patch("/users/deposite/:id",deposite)

