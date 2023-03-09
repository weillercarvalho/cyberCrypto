import express from "express";
import { depositController } from "../controllers/depositController.js";


const depositRouter = express.Router();

depositRouter.post("/deposit", depositController)

export default depositRouter