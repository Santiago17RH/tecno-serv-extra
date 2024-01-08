const express = require('express');
const TipoDocumentoController = require('../../controller/TipoDocumentoController');
const { validateTipoDocumento} = require('../../validator/tipoDocumentoValidator');
const router = express.Router();

router.post('/create', validateTipoDocumento,TipoDocumentoController.createNewTipoDocumento);
router.get('/select',TipoDocumentoController.getAllTipoDocumentos);
router.put('/update', validateTipoDocumento,TipoDocumentoController.updateTipoDocumento);

module.exports = router;
 