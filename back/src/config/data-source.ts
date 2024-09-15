import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { Appointment } from "../entities/AppointmentEntitie"
import { Credentials } from "../entities/CredentialEntitie"
import * as dotenv from 'dotenv';
require("dotenv").config();

export const AppDataSource = new DataSource({
    type: process.env.TYPE as "postgres",
    host: process.env.HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dropSchema: process.env.DROPSCHEMA === "true",
    synchronize: true,
    logging: false,
    entities: [User, Credentials, Appointment],
    subscribers: [],
    migrations: [],
})

export const UserModel = AppDataSource.getRepository(User)
export const AppointmentModel = AppDataSource.getRepository(Appointment)
export const CredentialModel = AppDataSource.getRepository(Credentials)