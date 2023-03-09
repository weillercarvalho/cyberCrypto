import express from "express";
import { signInController, signUpController } from "../controllers/signController.js";


const signRouter = express.Router();

//Puxar middleware de autenticacao.

signRouter.post("/signin", signInController)
signRouter.post("/signup", signUpController)

export default signRouter