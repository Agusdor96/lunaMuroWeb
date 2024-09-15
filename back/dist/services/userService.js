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
exports.userServiceLogin = exports.createUserService = exports.getUserServiceById = exports.getUserService = void 0;
const credentialsService_1 = require("./credentialsService");
const data_source_1 = require("../config/data-source");
const getUserService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield data_source_1.UserModel.find({
        relations: {
            credentialId: true,
            appointment: true,
        },
    });
    return users;
});
exports.getUserService = getUserService;
const getUserServiceById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield data_source_1.UserModel.findOne({
        where: { id: id },
        relations: {
            appointment: true,
            credentialId: true
        }
    });
    return user;
});
exports.getUserServiceById = getUserServiceById;
const createUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredential = yield (0, credentialsService_1.createCredentialService)({
        username: userData.username,
        password: userData.password,
    });
    const createUser = yield data_source_1.UserModel.create({
        name: userData.name,
        email: userData.email,
        birthdate: userData.birthdate,
        nDni: userData.nDni,
        credentialId: newCredential,
    });
    yield data_source_1.UserModel.save(createUser);
    return createUser;
});
exports.createUserService = createUserService;
const userServiceLogin = (credentialData) => __awaiter(void 0, void 0, void 0, function* () {
    const cred = yield (0, credentialsService_1.checkCredentials)(credentialData);
    if (yield data_source_1.UserModel.findOneBy({ credentialId: cred })) {
        cred.login = true;
        const loginResult = {
            login: cred.login,
            user: cred.user
        };
        yield data_source_1.CredentialModel.save(cred);
        return loginResult;
    }
    throw new Error("Fail to logIn");
});
exports.userServiceLogin = userServiceLogin;
