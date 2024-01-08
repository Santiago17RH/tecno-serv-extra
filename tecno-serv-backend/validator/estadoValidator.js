const { check } = require('express-validator')
const { validationResultFn } = require('./validateHelper')

const validateEstado = [
    check('estadoEquipo')
    .exists()
    .notEmpty()
    .isLength({ min: 2, max: 30 })
    .withMessage('El minimo de dijitos para el estado de el equipo es 2 y el maximo 30'),

    (req, res, next) => { 
        validationResultFn(req, res, next)
    }
]

module.exports = { validateEstado }    