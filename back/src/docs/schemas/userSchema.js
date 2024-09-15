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
        },
        required: ['name', 'email', "nDni"]
    }
};
