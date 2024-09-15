import { AppointmentModel, UserModel } from "../config/data-source";
import AppointmentDto from "../dtos/AppointmentDto";
import { Appointment } from "../entities/AppointmentEntitie";
import { Credentials } from "../entities/CredentialEntitie";
import { User } from "../entities/User";
import { getUserServiceById } from "./userService";


export const getAppointmentsService = async ():Promise<Appointment[]>=>{
    const appointments = await AppointmentModel.find({
        relations: {
            user:true,
        }
    })
    return appointments;
}

export const getAppServiceById = async (id:number): Promise<Appointment | null> =>{
    
    const appointmentbyId = await AppointmentModel.findOneBy({id:id})
    if(!appointmentbyId){
        throw new Error ("Id inexistente")
    }
    return appointmentbyId;
}

export const createAppointmentService = async (appointmentData: AppointmentDto ): Promise<Appointment> =>{
    const userAppoint: User | null = await UserModel.findOneBy({id:appointmentData.userId})
        if (!userAppoint) {
            throw new Error('El turno debe tener un ID de usuario.');

         } else {

            const newAppointment = await AppointmentModel.create(appointmentData);
             newAppointment.status = "active"
             newAppointment.user = userAppoint
        await AppointmentModel.save(newAppointment);
        return newAppointment
        }
}

export const modifyAppointment = async (appId:number): Promise<Appointment | null> =>{
    const modifiedAppointment:Appointment | null = await AppointmentModel.findOneBy({id:appId}) 
    if(!modifiedAppointment){
        throw new Error("Turno inexistente")
    } else if(modifiedAppointment) {
        modifiedAppointment.status = "cancelled";
        await AppointmentModel.save(modifiedAppointment)
    } 
    return modifiedAppointment;

}

