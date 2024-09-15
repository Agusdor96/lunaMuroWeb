import { Request, Response, NextFunction } from "express"
import AppointmentDto from "../dtos/AppointmentDto"
import { getUserServiceById } from "../services/userService";
import { User } from "../entities/User";

export const validateAppointments = async (req:Request, res:Response, next:NextFunction): Promise<void> => {
    const appointment: AppointmentDto = req.body;
    
    if(appointment){
       const user:User | null =  await getUserServiceById(appointment.userId);
        if(user?.credentialId.login){
            next();
        }else{
            res.status(400).json({error:"Debe estar logueado para reservar un turno"})
        }   
    }else{
        res.status(400).json({error:"Debe crearse un usuario"})
    }
}

export const validateInputsAppoint = (req:Request, res:Response, next:NextFunction) => {
    const { date, time} = req.body
    
        if(!date || !time){
            return res.status(400).json({error:"Faltan completar datos"})
        }else{
            next();
        }
    }


