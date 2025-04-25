import express from 'express';
import { getUserById, getUsers, login, Logout, signup, updateUserById } from '../Controllers/auth.controller.js';
import { isAuthenticated, validateUser } from '../Middlewares/protectedRoutes.js';

export const authRoutes=express.Router()

authRoutes.post("/signup",signup)
authRoutes.post("/login",login)
// authRoutes.get("/users",isAuthenticated,getUsers)

authRoutes.get("/users",getUsers)
authRoutes.get("/users/:id",validateUser,getUserById)

authRoutes.put("/users/update/:id",validateUser,updateUserById)


authRoutes.post("/logout",Logout)

