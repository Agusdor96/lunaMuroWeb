import express from "express";
const morgan = require("morgan")
import indexRouter from "./routes/indexRouter";
const cors = require ("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./config/swagger'); 

const server = express();


server.use(morgan("dev"));
server.use(cors())
server.use(express.json());
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

server.use(indexRouter);


export default server; 