module.exports = {
    Appointments: {
        type: 'object',
        properties: {
            id: {
                type: 'number',
                description: 'ID del turno'
            },
            date: {
                type: 'string',
                description: 'Fecha del turno'
            },
            time: {
                type: 'string',
                description: 'Hora del turno'
            },
            userId: {
                type: 'number',
                description: 'id del usuario que solicito el turno'
            },
        },
        required: ['date', 'time', "userId"]
    }
};