const express = require('express');
const { validateHistorial } = require('../../validator/historialMovValidator');
const HistorialMovController = require('../../controller/HistorialMovController');
const router = express.Router();

router.post('/create', validateHistorial,HistorialMovController.createNewHistorial);
router.get('/select', HistorialMovController.getAllHistorial);
router.get('/select1', HistorialMovController.getActual);
router.get('/select2', HistorialMovController.getPruebaExotica);

/* router.put('/update', validateEquipo, HistorialMovController.updateHistorial); */

module.exports = router;