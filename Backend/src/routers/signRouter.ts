import express from "express";
import {
  signInController,
  signUpController,
} from "../controllers/signController.js";
import { signUpMiddleware, signInMiddleware } from "../middlewares/authenticationMiddleware.js";

const signRouter = express.Router();



signRouter.post("/signin",signInMiddleware, signInController);
signRouter.post("/signup", signUpMiddleware, signUpController);

export default signRouter;
