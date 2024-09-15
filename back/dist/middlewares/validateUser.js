"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.creationOfUser = exports.validateInputs = void 0;
const userService_1 = require("../services/userService");
const validateInputs = (req, res, next) => {
    const { name, email, birthdate, nDni, username, password } = req.body;
    if (!name || !email || !birthdate || !nDni || !username || !password) {
        return res.status(400).json({ error: "Faltan completar datos" });
    }
    else {
        next();
    }
};
exports.validateInputs = validateInputs;
const creationOfUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const { email, nDni, username } = userData;
    const allUsers = yield (0, userService_1.getUserService)();
    for (const user of allUsers) {
        if (user.email === email || user.nDni === nDni || user.credentialId.username === username) {
            res.status(400).json({ error: "email, nDni o username ya registrados" });
        }
    }
    next();
    // if(email || ndni || username)
    // si user data existe, hace algo, 
    //que?
    //fijate si las propiedades username, dni y mail existen.
    // en donde?
    //en users. 
});
exports.creationOfUser = creationOfUser;
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
