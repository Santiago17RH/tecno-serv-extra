const { check } = require('express-validator')
const { validationResultFn } = require('./validateHelper')

const validateUsuarioAC = [
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
    .isLength({ min: 5, max: 150 })
    .isEmail()
    .withMessage('Ingrese bien el correo con su respectiva estructura, no mayor a 150 caracteres'),

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
    
    (req, res, next) => { 
        validationResultFn(req, res, next)
    }
]

module.exports = { validateUsuarioAC }    