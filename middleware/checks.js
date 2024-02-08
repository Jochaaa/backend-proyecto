const {check} = require('express-validator')

const checks = [
    check('marca')
        .notEmpty().withMessage('El campo marca es requerido')
        .isString().withMessage('El campo debe ser un string'),
    check('estilo')
        .notEmpty().withMessage('El campo estilo es requerido')
        .isString().withMessage('El campo debe ser un string'),
    check('porcentaje')
        .notEmpty().withMessage('El campo porcentaje es requerido')
        .isNumeric().withMessage('El campo debe ser un numero'),
    check('cantidad')
        .notEmpty().withMessage('El campo cantidad es requerido')
        .isNumeric().withMessage('El campo debe ser un numero')
]

module.exports = checks