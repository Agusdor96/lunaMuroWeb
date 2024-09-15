{//GET /user => obtener todos los usuarios

// GET /user/:id => obtener un usuario por id

// POST /user/register => Crear un nuevo usuario

// POST /user/login => login del usuario a la app
 }

import { Router } from "express";
import { createUser, getUserById, getUsers, userLogin } from "../controllers/userController";
import { creationOfUser, validateInputs} from "../middlewares/validateUser";

const userRouter: Router = Router();

userRouter.get("/", getUsers)
userRouter.get("/:id", getUserById)
userRouter.post("/register", validateInputs, creationOfUser, createUser)
userRouter.post("/login", userLogin)

export default userRouter;
