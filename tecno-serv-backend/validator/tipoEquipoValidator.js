const { check } = require('express-validator')
const { validationResultFn } = require('./validateHelper')

const validateTipoEquipo = [
    check('tipoEquipo')
    .exists()
    .notEmpty()
    .isLength({ min: 2, max: 30 })
    .withMessage('El minimo de dijitos de la ubicacion es 2 y el maximo 30'),

    (req, res, next) => { 
        validationResultFn(req, res, next)
    }
]

module.exports = { validateTipoEquipo } 