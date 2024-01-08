const { check } = require('express-validator')
const { validationResultFn } = require('./validateHelper')

const validateProveedor = [
    check('identificacionProv')
    .exists()
    .notEmpty()
    .isLength({ min: 5, max: 20 })
    .withMessage('El minimo de dijitos en el documento de identidad es 5 y el maximo 20'),

    check('nombre')
    .exists()
    .not()
    .notEmpty()
    .isLength({ min: 3, max: 80 })
    .withMessage('Ingrese un nombre mayor a 3 y menor a 80 caracteres'),

    check('descProveedor')
    .exists()
    .notEmpty()
    .isLength({ max: 100 })
    .withMessage('Ingrese una descripcion del proveedor, no mayor a 100 caracteres'),

    check('numeroContacto')
    .exists()
    .notEmpty()
    .isLength({ max: 20 })
    .withMessage('Ingrese el numero de contacto, no mayor a 20 caracteres'),

    check('emailContacto')
    .exists()
    .notEmpty()
    .isEmail()
    .isLength({ min: 5, max: 150 })
    .withMessage('Ingrese bien el correo, mayor a 5 y menor a 150 caracteres'),
    
    (req, res, next) => { 
        validationResultFn(req, res, next)
    }
]

module.exports = { validateProveedor }    