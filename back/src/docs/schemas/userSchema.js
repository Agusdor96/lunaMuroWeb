module.exports = {
    User: {
        type: 'object',
        properties: {
            id: {
                type: 'string',
                description: 'ID único del usuario'
            },
            name: {
                type: 'string',
                description: 'Nombre del usuario'
            },
            email: {
                type: 'string',
                description: 'Correo electrónico del usuario'
            }
        },
        required: ['id', 'name', 'email']
    }
};
