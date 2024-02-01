const { check } = require('express-validator')
const { validationResultFn } = require('./validateHelper')

const validateHistorial = [
    check('idEquipo')
    .exists()
    .notEmpty()
    .withMessage('Ingrese el ID del equipo cachon'),

    check('rutaActa')
    .exists()
    .notEmpty()
    .withMessage('Ingrese algo'),

    check('observaciones')
    .exists()
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage('Sea observador y ponga algo de 5 o mas caracteres'),

    check('docIdentidad')
    .exists()
    .notEmpty()
    .isInt() 
    .isLength({ min: 5 })
    .withMessage('Ponga un documento de identidad que exista'),

    
    (req, res, next) => { 
        validationResultFn(req, res, next)
    }
]

module.exports = { validateHistorial }    