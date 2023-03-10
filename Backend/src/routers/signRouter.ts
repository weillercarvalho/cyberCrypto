import express from "express";
import {
  signInController,
  signUpController,
} from "../controllers/signController.js";
import { signUpMiddleware } from "../middlewares/authenticationMiddleware.js";

const signRouter = express.Router();



signRouter.post("/signin", signInController);
signRouter.post("/signup", signUpMiddleware, signUpController);

export default signRouter;
