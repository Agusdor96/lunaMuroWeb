import { Router } from "express";
import userRouter from "./userRouter";
import appointmentRouter from "./appointmentsRouter";

const indexRouter: Router = Router();


indexRouter.use("/users", userRouter)
indexRouter.use("/appointments", appointmentRouter)

export default indexRouter;