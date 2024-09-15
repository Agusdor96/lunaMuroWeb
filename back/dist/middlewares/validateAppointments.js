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
exports.validateInputsAppoint = exports.validateAppointments = void 0;
const userService_1 = require("../services/userService");
const validateAppointments = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = req.body;
    if (appointment) {
        const user = yield (0, userService_1.getUserServiceById)(appointment.userId);
        if (user === null || user === void 0 ? void 0 : user.credentialId.login) {
            next();
        }
        else {
            res.status(400).json({ error: "Debe estar logueado para reservar un turno" });
        }
    }
    else {
        res.status(400).json({ error: "Debe crearse un usuario" });
    }
});
exports.validateAppointments = validateAppointments;
const validateInputsAppoint = (req, res, next) => {
    const { date, time } = req.body;
    if (!date || !time) {
        return res.status(400).json({ error: "Faltan completar datos" });
    }
    else {
        next();
    }
};
exports.validateInputsAppoint = validateInputsAppoint;
