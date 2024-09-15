const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Proyecto LaLunaMuro',  // Nombre de tu proyecto
            version: '1.0.0',                                      // Versión de la API
            description: 'Esta es la API de un proyecto para una plataforma de turnos y Ecommecerce para el centro de escalada LaLunaMuro',  // Descripción general
            // contact: {
            //     name: 'Soporte Técnico',                           // Nombre de contacto
            //     email: 'miroetto12@lalunamuro.com'                    // Email de contacto
            // },
        },
        servers: [
            {
                url: 'http://localhost:4000',                      // Servidor de desarrollo
                description: 'Servidor local'
            },
            // {
            //     url: 'https://lalunamuro.com/api',                 // Servidor de producción
            //     description: 'Servidor de producción'
            // }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        },
        security: [
            {
                bearerAuth: []
            }
        ],
    },
    apis: ['./src/docs/*.js'], // Aquí defines las rutas o archivos donde están los endpoints documentados
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
module.exports = swaggerDocs;