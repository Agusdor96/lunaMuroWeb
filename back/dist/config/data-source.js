"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialModel = exports.AppointmentModel = exports.UserModel = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const AppointmentEntitie_1 = require("../entities/AppointmentEntitie");
const CredentialEntitie_1 = require("../entities/CredentialEntitie");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1929Grace",
    database: "proyecto_m3",
    dropSchema: false,
    synchronize: true,
    logging: false,
    entities: [User_1.User, CredentialEntitie_1.Credentials, AppointmentEntitie_1.Appointment],
    subscribers: [],
    migrations: [],
});
exports.UserModel = exports.AppDataSource.getRepository(User_1.User);
exports.AppointmentModel = exports.AppDataSource.getRepository(AppointmentEntitie_1.Appointment);
exports.CredentialModel = exports.AppDataSource.getRepository(CredentialEntitie_1.Credentials);
