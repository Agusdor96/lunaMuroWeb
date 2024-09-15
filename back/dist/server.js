"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan = require("morgan");
const indexRouter_1 = __importDefault(require("./routes/indexRouter"));
const cors = require("cors");
const server = (0, express_1.default)();
server.use(morgan("dev"));
server.use(cors());
server.use(express_1.default.json());
server.use(indexRouter_1.default);
exports.default = server;
