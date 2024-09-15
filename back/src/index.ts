import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";
require("dotenv").config(); //automaticamente las variables de entorno se habilitan para que yo las pueda utilizar


AppDataSource.initialize()
    .then(res =>{
        console.log("conexion a BDD exitosa");

        //una vez que se conecto a la BDD que se ejecute preloadData()
        // Esto devuelve una promesa por lo que le encadenamos un .then
        // .then(res => { 
        //     server.listen(PORT, ()=>{
        //     console.log(`Server listening on PORT ${PORT}`);
        //     });     
        //  })
        server.listen(PORT, ()=>{
            console.log(`Server listening on PORT ${PORT}`);
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