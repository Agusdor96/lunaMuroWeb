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
exports.modifyAppointment = exports.createAppointmentService = exports.getAppServiceById = exports.getAppointmentsService = void 0;
const data_source_1 = require("../config/data-source");
const getAppointmentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield data_source_1.AppointmentModel.find({
        relations: {
            user: true,
        }
    });
    return appointments;
});
exports.getAppointmentsService = getAppointmentsService;
const getAppServiceById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentbyId = yield data_source_1.AppointmentModel.findOneBy({ id: id });
    if (!appointmentbyId) {
        throw new Error("Id inexistente");
    }
    return appointmentbyId;
});
exports.getAppServiceById = getAppServiceById;
const createAppointmentService = (appointmentData) => __awaiter(void 0, void 0, void 0, function* () {
    const userAppoint = yield data_source_1.UserModel.findOneBy({ id: appointmentData.userId });
    if (!userAppoint) {
        throw new Error('El turno debe tener un ID de usuario.');
    }
    else {
        const newAppointment = yield data_source_1.AppointmentModel.create(appointmentData);
        newAppointment.status = "active";
        newAppointment.user = userAppoint;
        yield data_source_1.AppointmentModel.save(newAppointment);
        return newAppointment;
    }
});
exports.createAppointmentService = createAppointmentService;
const modifyAppointment = (appId) => __awaiter(void 0, void 0, void 0, function* () {
    const modifiedAppointment = yield data_source_1.AppointmentModel.findOneBy({ id: appId });
    if (!modifiedAppointment) {
        throw new Error("Turno inexistente");
    }
    else if (modifiedAppointment) {
        modifiedAppointment.status = "cancelled";
        yield data_source_1.AppointmentModel.save(modifiedAppointment);
    }
    return modifiedAppointment;
});
exports.modifyAppointment = modifyAppointment;
