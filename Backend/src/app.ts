import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import signRouter from "./routers/signRouter.js";
import dashboardRouter from "./routers/dashboardRouter.js";
import depositRouter from "./routers/depositRouter.js";
import withdrawRouter from "./routers/withdrawRouter.js";


dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());
server.use("/api",signRouter)
server.use("/api",dashboardRouter)
server.use("/api",depositRouter)
server.use("/api",withdrawRouter)

server.listen(process.env.PORT || 5000, () => {
    console.log(`Listening on the ${process.env.PORT} port`)
})

export default server;