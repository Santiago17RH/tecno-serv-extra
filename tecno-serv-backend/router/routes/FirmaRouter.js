const { validateEstado } = require('../../validator/estadoValidator');
const express = require('express');
//const multer = require('multer');
const FirmaController = require('../../controller/FirmaController');
const upload = require('../../middleware/multerUpload');
const router = express.Router();

router.post('/create', upload.single('firma'), FirmaController.createNewFirma);
router.get('/select', FirmaController.getFirma);
router.put('/update', FirmaController.updateFirma);

module.exports = router;