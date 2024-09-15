import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { Appointment } from "../entities/AppointmentEntitie"
import { Credentials } from "../entities/CredentialEntitie"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1929Grace",
    database: "proyecto_m3",
    dropSchema: false,
    synchronize: true,
    logging: false,
    entities: [User, Credentials, Appointment],
    subscribers: [],
    migrations: [],
})

export const UserModel = AppDataSource.getRepository(User)
export const AppointmentModel = AppDataSource.getRepository(Appointment)
export const CredentialModel = AppDataSource.getRepository(Credentials)