const { check } = require('express-validator')
const { validationResultFn } = require('./validateHelper')

const validateArea = [
    check('areaUsuario')
    .exists()
    .notEmpty()
    .isLength({ min: 2, max: 30 })
    .withMessage('El minimo de dijitos en el area es 2 y el maximo 30'),

    (req, res, next) => { 
        validationResultFn(req, res, next)
    }
]

module.exports = { validateArea }    