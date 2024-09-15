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
exports.checkCredentials = exports.createCredentialService = void 0;
const data_source_1 = require("../config/data-source");
const createCredentialService = (credentialData) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredential = yield data_source_1.CredentialModel.create(credentialData);
    newCredential.login = false;
    yield data_source_1.CredentialModel.save(newCredential);
    return newCredential;
});
exports.createCredentialService = createCredentialService;
const checkCredentials = (credentialData) => __awaiter(void 0, void 0, void 0, function* () {
    const credentialUsername = yield data_source_1.CredentialModel.findOne({
        where: {
            username: credentialData.username,
        },
        relations: {
            user: true
        }
    });
    if (credentialUsername && credentialUsername.password === credentialData.password) {
        return credentialUsername;
    }
    throw new Error("Invalid credentials");
});
exports.checkCredentials = checkCredentials;
