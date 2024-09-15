"use strict";
// import { NextFunction } from "express";
// export const catchAsync = (controller:Function) => {
//     return (req:Request, res:Response, next:NextFunction) => {
//         controller(req, res).catch((err:Error)=> next(err));
//     }
// }
// HOMEWORK 1
// Un usuario SIEMPRE debe estar autenticado para poder reservar un turno. No se agendará turnos a anónimos o invitados.
//Los turnos deberán ser agendados siempre dentro del horario de atención del establecimiento, el cual también estará en tus manos decidir cuál es. También deberás tener en cuenta los fines de semana como días no laborables. 
//Los turnos reservados por los usuarios pueden ser cancelados hasta el día anterior al día de la reserva. No implementaremos la función de reprogramar. 
