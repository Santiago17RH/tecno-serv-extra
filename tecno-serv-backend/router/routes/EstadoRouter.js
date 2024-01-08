const express = require('express');
const EstadoController = require('../../controller/EstadoController');
const { validateEstado } = require('../../validator/estadoValidator');
const router = express.Router();

router.post('/create', validateEstado, EstadoController.createNewEstado);
router.get('/select',EstadoController.getAllEstados);
router.put('/update', validateEstado, EstadoController.updateEstado);

module.exports = router;
 