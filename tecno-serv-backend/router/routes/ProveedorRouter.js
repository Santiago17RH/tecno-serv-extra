const express = require('express');
const ProveedorController = require('../../controller/ProveedorController');
const { validateProveedor } = require('../../validator/proveedorValidator');
const router = express.Router();

router.post('/create', validateProveedor,ProveedorController.createNewProveedor);
router.get('/select',ProveedorController.getAllProveedores);
router.put('/update', validateProveedor,ProveedorController.updateProveedor);

module.exports = router;
 