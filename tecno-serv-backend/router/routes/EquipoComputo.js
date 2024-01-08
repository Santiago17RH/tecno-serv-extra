const express = require('express');
const { validateEquipo } = require('../../validator/equipoValidator');
const EquipoController = require('../../controller/EquipoController');
const router = express.Router();

router.post('/create', validateEquipo, EquipoController.createNewEquipo);
router.get('/select',EquipoController.getAllEquipos);
router.put('/update', validateEquipo, EquipoController.updateEquipo);

module.exports = router;
 