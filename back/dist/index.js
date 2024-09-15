"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const envs_1 = require("./config/envs");
require("reflect-metadata");
const data_source_1 = require("./config/data-source");
require("dotenv").config(); //automaticamente las variables de entorno se habilitan para que yo las pueda utilizar
data_source_1.AppDataSource.initialize()
    .then(res => {
    console.log("conexion a BDD exitosa");
    //una vez que se conecto a la BDD que se ejecute preloadData()
    // Esto devuelve una promesa por lo que le encadenamos un .then
    // .then(res => { 
    //     server.listen(PORT, ()=>{
    //     console.log(`Server listening on PORT ${PORT}`);
    //     });     
    //  })
    server_1.default.listen(envs_1.PORT, () => {
        console.log(`Server listening on PORT ${envs_1.PORT}`);
    });
});
// OPCION 2 sin tanto .then
// const initApp = async () => {
//     await AppDataSource.initialize()
//      await preloadData()
//          server.listen(PORT, ()=>{
//              console.log(`Server listening on PORT ${PORT}`);
//              });     
//      }
