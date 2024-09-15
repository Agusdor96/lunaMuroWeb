"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{ // GET /appointments => obtener todos los turnos
    // GET /appointments/:id => obtener un turno por id
    // POST /appointments/schedule => crear un turno 
    // PUT /appointments/cancel => Cancelar un turno
}
const express_1 = require("express");
const appointmentsController_1 = require("../controllers/appointmentsController");
const validateAppointments_1 = require("../middlewares/validateAppointments");
const appointmentRouter = (0, express_1.Router)();
appointmentRouter.get("/", appointmentsController_1.getAppointments);
appointmentRouter.get("/:id", appointmentsController_1.getAppointmentById);
appointmentRouter.post("/schedule", validateAppointments_1.validateAppointments, appointmentsController_1.createAppointment);
appointmentRouter.put("/cancel/:id", appointmentsController_1.cancelAppointment);
exports.default = appointmentRouter;
