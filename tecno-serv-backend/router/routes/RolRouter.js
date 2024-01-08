const express = require('express');
const RolController = require('../../controller/RolController');
const { validateRol } = require('../../validator/rolValidator');
const router = express.Router();

router.post('/create', validateRol,RolController.createNewRol);
router.get('/select',RolController.getAllRoles);
router.put('/update', validateRol,RolController.updateRol);

module.exports = router;
 