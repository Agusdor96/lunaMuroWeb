module.exports = {
    User: {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                description: 'Nombre del usuario'
            },
            email: {
                type: 'string',
                description: 'Correo electrónico del usuario'
            },
            nDni: {
                type: 'number',
                description: 'Numero de identificacion nacional del usuario'
            },
            birthdate:{
                type: "string",
                description: "Fecha de nacimiento"
            },
            username:{
                type: "string",
                description: "Nombre de usuario"
            },
            password:{
                type: "string",
                description: "contraseña"
            }
        },
        required: ['name', 'email', "nDni", "birthdate", "username", "password"]
    }
};
