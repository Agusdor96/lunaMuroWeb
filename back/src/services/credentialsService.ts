import { CredentialModel, UserModel } from "../config/data-source";
import { CredentialDto } from "../dtos/CredentialDto";
import { Credentials } from "../entities/CredentialEntitie";

export const createCredentialService = async (credentialData: CredentialDto): Promise<Credentials> => {
    const newCredential: Credentials = await CredentialModel.create(credentialData);
    newCredential.login = false;
    await CredentialModel.save(newCredential);
    return newCredential;
};

export const checkCredentials = async (credentialData: CredentialDto): Promise<Credentials> => {
    const credentialUsername = await CredentialModel.findOne({
        where: {
            username: credentialData.username,
        },
        relations:{
            user:true
        }
    });

    if (credentialUsername && credentialUsername.password === credentialData.password) {
        return credentialUsername;
    }
    throw new Error("Invalid credentials");
};
