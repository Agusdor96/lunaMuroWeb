import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";
require("dotenv").config(); //automaticamente las variables de entorno se habilitan para que yo las pueda utilizar


AppDataSource.initialize()
    .then(res =>{
        console.log("conexion a BDD exitosa");
        

        server.listen(PORT, ()=>{
            console.log(`Server listening on PORT ${PORT}`);
        });
    });  
