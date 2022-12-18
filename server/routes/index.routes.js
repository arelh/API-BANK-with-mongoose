import { Router } from "express";
import { getUser,addUser,deleteUser,editUser,getUserById, deposite,transferCash } from "../controllers/Users.controller.js";
import cors from "cors"

 export const indexRouter=Router()

 indexRouter.get("/users",cors(),getUser)
 indexRouter.get("/users/:id",cors(),getUserById)
 indexRouter.post("/users/add",cors(),addUser)
 indexRouter.post("/users/transfer/:firstId/to/:secondId",cors(),transferCash)
 indexRouter.delete("/users/delete/:id",cors(),deleteUser)
 indexRouter.patch("/users/edit/:id",cors(),editUser)
 indexRouter.patch("/users/deposite/:id",cors(),deposite)

