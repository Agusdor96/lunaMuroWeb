import { Request, Response } from "express"
import { createAppointmentService, getAppServiceById, getAppointmentsService, modifyAppointment } from "../services/appointmentsService"
import { Appointment } from "../entities/AppointmentEntitie"
import AppointmentDto from "../dtos/AppointmentDto"

export const getAppointments = async (req:Request, res:Response) => {
  try{
    const appointment: Appointment[] = await getAppointmentsService()
    res.status(201).json(appointment)
  } catch (err) {
    res.status(404).json({error:"Error al obtener los turnos"})
  }
}

export const getAppointmentById = async (req:Request, res:Response) => {
  try{
    const {id} = req.params 
    const appId: Appointment | null = await getAppServiceById(Number(id))
    res.status(200).json(appId)
  } catch (err){
    res.status(404).json({error:"Error al obtener turno por id"})
  }
 }

 export const createAppointment = async (req:Request, res:Response) => {
  try{
    const appointment: AppointmentDto = req.body;
    const newAppointment: Appointment = await createAppointmentService(appointment);
    res.status(201).json(newAppointment)
  } catch (err){
    res.status(400).json({error:"Error al crear turno"})
  }
}

export const cancelAppointment = async (req:Request, res:Response) => {
  try{
    const {id} = req.params
    const appointCanceled = await modifyAppointment(Number(id))
    res.status(200).json(appointCanceled)
  }catch (err){
  res.status(404).json({error:"Error al cancelar el turno"})
  }
}

