const express = require('express');
const { validateEquipo } = require('../../validator/equipoValidator');
const EquipoController = require('../../controller/EquipoController');
const router = express.Router();

router.post('/create', validateEquipo, EquipoController.createNewEquipo);
router.get('/select',EquipoController.getAllEquipos);
router.put('/update', validateEquipo, EquipoController.updateEquipo);
/* router.get('/selectUsuario1', EquipoController.getEquipoUsuario_1); */
router.get('/selectHistorial', EquipoController.getAllEquipoHistorial);
router.get('/selectUsuario', EquipoController.getEquipoUsuario);
router.get('/acta', EquipoController.getEquipoActa);

module.exports = router;

 