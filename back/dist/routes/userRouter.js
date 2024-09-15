"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{ //GET /user => obtener todos los usuarios
    // GET /user/:id => obtener un usuario por id
    // POST /user/register => Crear un nuevo usuario
    // POST /user/login => login del usuario a la app
}
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const validateUser_1 = require("../middlewares/validateUser");
const userRouter = (0, express_1.Router)();
userRouter.get("/", userController_1.getUsers);
userRouter.get("/:id", userController_1.getUserById);
userRouter.post("/register", validateUser_1.validateInputs, validateUser_1.creationOfUser, userController_1.createUser);
userRouter.post("/login", userController_1.userLogin);
exports.default = userRouter;
