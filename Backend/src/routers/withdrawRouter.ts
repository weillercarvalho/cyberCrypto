import express from "express";
import { withdrawController } from "../controllers/withdrawController.js";

const withdrawRouter = express.Router();

withdrawRouter.post("/dashboard", withdrawController)

export default withdrawRouter