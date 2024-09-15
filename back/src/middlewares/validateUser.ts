import { Request, Response, NextFunction} from "express";
import { UserDto } from "../dtos/UserDto";
import { getUserService } from "../services/userService";


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

    const allUsers = await getUserService()

    for(const user of allUsers){
        if(user.email === email || user.nDni === nDni || user.credentialId.username === username){
            res.status(400).json({error:"email, nDni o username ya registrados"})
        } 
    }
    next()

    // if(email || ndni || username)
   // si user data existe, hace algo, 
   //que?
   //fijate si las propiedades username, dni y mail existen.
   // en donde?
   //en users. 

}


//No se tiene que poder crear un usuario con el mismo username, email o dni que otro



//export const validateUserById = () => {
    // const user = await UserModel.findOne({
    //     where: {id:id},
    //     relations: {
    //         appointment:true,
    //         credentialId:true
    //     }
    // })

    // if(!user){
    //    throw new Error ("id de Usario Inexistente")
    // }
    //}