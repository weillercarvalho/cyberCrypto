import express from "express";
import { dashboardController } from "../controllers/dashboardController.js";

const dashboardRouter = express.Router();

dashboardRouter.get("/dashboard", dashboardController)

export default dashboardRouter