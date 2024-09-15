import { Router } from "express";
import { createUser, getUserById, getUsers, userLogin } from "../controllers/userController";
import { creationOfUser, validateInputs} from "../middlewares/validateUser";

const userRouter: Router = Router();

userRouter.get("/", getUsers)
userRouter.get("/:id", getUserById)
userRouter.post("/register", validateInputs, creationOfUser, createUser)
userRouter.post("/login", userLogin)

export default userRouter;
