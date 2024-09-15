"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const userService_1 = require("../services/userService");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userService_1.getUserService)();
        res.status(200).json(users);
    }
    catch (err) {
        res.status(400).json({ error: "Error al obtener usuarios" });
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield (0, userService_1.getUserServiceById)(Number(id));
        res.status(200).json(user);
    }
    catch (err) {
        res.status(404).json({ error: "No se encontro el id del usuario" });
    }
});
exports.getUserById = getUserById;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const newUser = yield (0, userService_1.createUserService)(user);
        res.status(201).json(newUser);
    }
    catch (err) {
        res.status(400).json({ error: "Error al crear usuario" });
    }
});
exports.createUser = createUser;
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userCred = req.body;
        const login = yield (0, userService_1.userServiceLogin)(userCred);
        res.status(200).json(login);
    }
    catch (err) {
        res.status(400).json({ error: "Error al intentar hacer login" });
    }
});
exports.userLogin = userLogin;
