const { check } = require('express-validator')
const { validationResultFn } = require('./validateHelper')

const validateUsuario = [
    check('docIdentidadUsuario')
    .exists()
    .notEmpty()
    .isLength({ min: 5, max: 20 })
    .withMessage('El minimo de dijitos en el documento de identidad es 5 y el maximo 20'),

    check('nombreUsuario')
    .exists()
    .not()
    .notEmpty()
    .isLength({ min: 3, max: 80 })
    .withMessage('Ingrese un nombre mayor a 3 y menor a 80 caracteres'),

    check('correo')
    .exists()
    .notEmpty()
    .isEmail()
    .isLength({ min: 5, max: 150 })
    .withMessage('Ingrese bien el correo, no mayor a 150 caracteres'),

    check('rolUsuario')
    .exists()
    .notEmpty()
    .isInt() 
    .withMessage('Elija el rol'),

    check('areaUsuario')
    .exists()
    .notEmpty()
    .isInt() 
    .withMessage('Elija el área'),

    check('ubicacionUsuario')
    .exists()
    .notEmpty()
    .isInt() 
    .withMessage('Elija la ubicacion'),

    check('contraseña')
    .exists()
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage('La contraseña debe ser mayor a 8 dígitos'),
    
    (req, res, next) => { 
        validationResultFn(req, res, next)
    }
]

module.exports = { validateUsuario }    