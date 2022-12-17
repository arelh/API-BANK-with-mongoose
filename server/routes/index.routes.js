import { Router } from "express";
import { getUser } from "../controllers/Users.controller.js";

 export const indexRouter=Router()

 indexRouter.get("/getAllUsers",getUser)
