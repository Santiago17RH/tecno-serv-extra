const { check } = require('express-validator')
const { validationResultFn } = require('./validateHelper')

const validateEquipo = [
    check('identificacionProv')
    .exists()
    .notEmpty()
    .isLength({ min: 5, max: 20 })
    .withMessage('El minimo de dijitos en el documento de identidad es 5 y el maximo 20'),

    check('placaNumeroSerie')
    .exists()
    .notEmpty()
    .withMessage('Ingrese la placa o numero de serie'),

    check('marca')
    .exists()
    .notEmpty()
    .withMessage('Ingrese la marca'),

    check('tipoEquipo')
    .exists()
    .notEmpty()
    .withMessage('Elija el tipo de equipo'),

    check('contingencia')
    .exists()
    .notEmpty()
    .withMessage('Elija si o no'),

    check('procesador')
    .exists()
    .notEmpty()
    .isLength({ max: 30 })
    .withMessage('Ingrese que procesador tiene el dispositivo, no mayor a 30 caracteres'),

    check('descripcion')
    .exists()
    .notEmpty()
    .withMessage('Ingrese una descripcion breve'),

    check('sistemaOperativo')
    .exists()
    .notEmpty()
    .withMessage('Elija si o no'),

    check('ram')
    .exists()
    .notEmpty()
    .withMessage('Ingrese la cantidad de ram del dispositivo'),

    check('almacenamiento')
    .exists()
    .notEmpty()
    .withMessage('Ingrese el almacenamiento del dispositivo'),

    check('estado')
    .exists()
    .notEmpty()
    .withMessage('Seleccione el estado en el que se encuentra el dispositivo'),

    (req, res, next) => { 
        validationResultFn(req, res, next)
    }
]

module.exports = { validateEquipo }    