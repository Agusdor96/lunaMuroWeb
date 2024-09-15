/**
 * @swagger
 * /appointments:
 *   get:
 *     summary: Obtiene todos los turnos
 *     tags: [Appointments]
 *     responses:
 *       200:
 *         description: Lista de turnos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Appointments'
 *       500:
 *         description: Error del servidor
 */
 
/**
 * @swagger
 * /appointments/{id}:
 *   get:
 *     summary: Obtiene un turno por ID
 *     tags: [Appointments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del turno
 *     responses:
 *       200:
 *         description: Turno encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Appointments'
 *       404:
 *         description: Turno no encontrado
 */
/**
 * @swagger
 * /appointments/schedule:
 *   post:
 *     summary: Solicitud de Turno
 *     tags: [Appointments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Appointments'
 *     responses:
 *       200:
 *         description: Informacion del turno del usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Appointments'
 *       500:
 *         description: Error del servidor
 */
/**
 * @swagger
 * /appointments/cancel/{id}:
 *   put:
 *     summary: Cancelacion de un turno del usuario
 *     tags: [Appointments]
 *     parameters: 
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del turno que se desea cancelar
 *     responses:
 *       200:
 *         description: Turno cancelado con exito
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Appointments'
 *       500:
 *         description: Error del servidor
 */