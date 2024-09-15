import express from "express";
const morgan = require("morgan")
import indexRouter from "./routes/indexRouter";
const cors = require ("cors");
const server = express();

server.use(morgan("dev"));
server.use(cors())
server.use(express.json());

server.use(indexRouter);


export default server; 