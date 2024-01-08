const express = require('express');
const AreaController = require('../../controller/AreaController');
const { validateArea } = require('../../validator/areaValidator');
const router = express.Router();

router.post('/create', validateArea, AreaController.createNewArea);
router.get('/select',AreaController.getAllAreas);
router.put('/update', validateArea, AreaController.updateArea);

module.exports = router;
 