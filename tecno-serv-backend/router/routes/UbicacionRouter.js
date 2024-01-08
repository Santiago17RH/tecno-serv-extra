const express = require('express');
const UbicacionController = require('../../controller/UbicacionController');
const { validateUbicacion } = require('../../validator/ubicacionValidation');
const router = express.Router();

router.post('/create', validateUbicacion,UbicacionController.createNewUbicacion);
router.get('/select', UbicacionController.getAllUbicaciones);
router.put('/update', validateUbicacion,UbicacionController.updateUbicacion);

module.exports = router;
 