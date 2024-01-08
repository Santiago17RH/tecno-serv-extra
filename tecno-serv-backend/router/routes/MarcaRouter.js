const express = require('express');
const MarcaController = require('../../controller/MarcaController');
const { validateMarca } = require('../../validator/marcaValidator');
const router = express.Router();

router.post('/create', validateMarca, MarcaController.createNewMarca);
router.get('/select', MarcaController.getAllMarcas);
router.put('/update', validateMarca, MarcaController.updateMarca);

module.exports = router;
 