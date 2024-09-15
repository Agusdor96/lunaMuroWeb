"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const validateUser = (req, res, next) => {
    const { name, email, birthdate, nDni, username, password } = req.body;
    if (!name || !email || !birthdate || !nDni || !username || !password) {
        return res.status(400).json({ error: "Faltan completar datos" });
    }
    else {
        next();
    }
};
exports.validateUser = validateUser;
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
