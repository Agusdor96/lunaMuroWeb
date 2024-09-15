import { Request, Response, NextFunction} from "express";
import { UserDto } from "../dtos/UserDto";
import { getUserService } from "../services/userService";
import { User } from "../entities/User";


export const validateInputs = (req:Request, res:Response, next:NextFunction) => {
const { name, email, birthdate, nDni, username, password} = req.body

    if(!name || !email || !birthdate || !nDni || !username || !password){
        return res.status(400).json({error:"Faltan completar datos"})
    }else{
        next();
    }
}

export const creationOfUser = async (req:Request, res:Response, next:NextFunction) =>{
    const userData:UserDto = req.body
    const {email, nDni, username} = userData
    try{ 
        const allUsers: User[] | string = await getUserService()
        if(typeof allUsers === "string") return next()

        for(const user of allUsers){
            if(user.email === email || user.nDni === nDni || user.credentialId.username === username){
                return res.status(400).json({error:"email, nDni o username ya registrados"})
            } 
        }
        return next()   
    }catch(err){
        return res.status(500).json({ error: "Error en la creación del usuario" });
    } 
}
