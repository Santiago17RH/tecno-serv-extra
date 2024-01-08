const express = require('express');
const TipoEquipoController = require('../../controller/TipoEquipoController');
const { validateTipoEquipo } = require('../../validator/tipoEquipoValidator');
const router = express.Router();

router.post('/create', validateTipoEquipo, TipoEquipoController.createNewTipoEquipo);
router.get('/select',TipoEquipoController.getAllTipoEquipos);
router.put('/update', validateTipoEquipo, TipoEquipoController.updateTipoEquipo);

module.exports = router;
 