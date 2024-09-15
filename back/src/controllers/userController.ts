import { Request, Response } from "express"
import { createUserService, getUserService, getUserServiceById, userServiceLogin } from "../services/userService"
import { UserDto } from "../dtos/UserDto";
import { User } from "../entities/User";
import { CredentialDto } from "../dtos/CredentialDto";


export const getUsers = async (req:Request, res:Response) => {
    try{
        const users:User[] = await getUserService();
        res.status(200).json(users)
    }catch (err){
        res.status(400).json({error: "Error al obtener usuarios"})
    }
}
export const getUserById = async (req:Request, res:Response) => {
    try{
        const {id} = req.params 
        
        
        const user: User | null = await getUserServiceById(Number(id));
        res.status(200).json(user)
    }catch (err){
        res.status(404).json({error: "No se encontro el id del usuario"})
    }
 }

 export const createUser = async (req:Request, res:Response) => {
    try{
        const user:UserDto = req.body;
        const newUser:User = await createUserService(user);
        res.status(201).json(newUser)
    }catch (err){
        res.status(400).json({error: "Error al crear usuario"})
    }
 }

 export const userLogin = async (req:Request, res:Response) => {
    try{
        const userCred:CredentialDto = req.body;
        const login = await userServiceLogin(userCred);
        res.status(200).json(login)
    }catch (err){
        res.status(400).json({error: "Error al intentar hacer login"})
    }
 }

