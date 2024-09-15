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
exports.cancelAppointment = exports.createAppointment = exports.getAppointmentById = exports.getAppointments = void 0;
const appointmentsService_1 = require("../services/appointmentsService");
const getAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointment = yield (0, appointmentsService_1.getAppointmentsService)();
        res.status(201).json(appointment);
    }
    catch (err) {
        res.status(404).json({ error: "Error al obtener los turnos" });
    }
});
exports.getAppointments = getAppointments;
const getAppointmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const appId = yield (0, appointmentsService_1.getAppServiceById)(Number(id));
        res.status(200).json(appId);
    }
    catch (err) {
        res.status(404).json({ error: "Error al obtener turno por id" });
    }
});
exports.getAppointmentById = getAppointmentById;
const createAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointment = req.body;
        const newAppointment = yield (0, appointmentsService_1.createAppointmentService)(appointment);
        res.status(201).json(newAppointment);
    }
    catch (err) {
        res.status(400).json({ error: "Error al crear turno" });
    }
});
exports.createAppointment = createAppointment;
const cancelAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const appointCanceled = yield (0, appointmentsService_1.modifyAppointment)(Number(id));
        res.status(200).json(appointCanceled);
    }
    catch (err) {
        res.status(404).json({ error: "Error al cancelar el turno" });
    }
});
exports.cancelAppointment = cancelAppointment;
