import { Router } from "express";
import { cancelAppointment, createAppointment, getAppointmentById, getAppointments } from "../controllers/appointmentsController";
import { validateAppointments, validateInputsAppoint } from "../middlewares/validateAppointments";

const appointmentRouter: Router = Router();

appointmentRouter.get("/", getAppointments);
appointmentRouter.get("/:id", getAppointmentById);
appointmentRouter.post("/schedule", validateAppointments, validateInputsAppoint ,createAppointment);
appointmentRouter.put("/cancel/:id", cancelAppointment);

export default appointmentRouter;