import { UserDto } from "../dtos/UserDto";
import { checkCredentials, createCredentialService } from "./credentialsService";
import { CredentialDto } from "../dtos/CredentialDto";
import { CredentialModel, UserModel } from "../config/data-source";
import { User } from "../entities/User";
import { Credentials } from "../entities/CredentialEntitie";



export const getUserService = async (): Promise<User[] | string> => {
    const users:User[] = await UserModel.find({
        relations:{
            credentialId: true,
            appointment: true,
        },
    })
    if(!users.length) return ("No se encontraron usuarios registrados")
    return users;
}

export const getUserServiceById = async (id:number): Promise<User | null> => {
    const user:User|null = await UserModel.findOne({
        where: {id},
        relations: {
            appointment:true,
            credentialId:true
        }
    })
    if(!user) throw new Error ("No se encuentran usuarios con el id proporcionado")
    return user;
}

export const createUserService = async (userData: UserDto) => {
    const newCredential:Credentials = await createCredentialService({
        username: userData.username,
        password: userData.password,
         
    }); 

    const createUser:User = UserModel.create({
        name: userData.name,
        email: userData.email,
        birthdate: userData.birthdate,
        nDni: userData.nDni,
        credentialId: newCredential,
    });
    await UserModel.save(createUser);
    return createUser; 
}

export const userServiceLogin = async (credentialData: CredentialDto) => {  
    const cred: Credentials = await checkCredentials(credentialData)
    
    if(await UserModel.findOneBy({credentialId:cred})){
        cred.login = true;
        const loginResult = {
            login: cred.login,
            user: cred.user,
        }
        await CredentialModel.save(cred)
        return loginResult;
    }
    throw new Error ("Error al iniciar sesion")
}






