const { validationResult } = require('express-validator');

const validationResultFn = (req, res, next) => {
    try {
        validationResult(req).throw()
        return next()
    } catch (error) {
        console.log("Error con la validacion")
        res.status(403)
        res.send({errors: error.array()})
    }
}

module.exports = { validationResultFn }