const express = require('express');
const UsuarioController = require('../../controller/UsuarioController');
const ValidacionToken = require('../../middleware/ValidacionToken');
const { validateUsuario } = require('../../validator/usuarioValidator')
const { validateUsuarioAC } = require('../../validator/usuarioACValidator')

const router = express.Router();

router.post('/create' , validateUsuario, UsuarioController.createNewUser);
router.get('/UsuariosCRIKOS' , validateUsuario, UsuarioController.createCredencialesCargueMasivo);
router.get('/select', ValidacionToken, UsuarioController.getAllUsers);
router.post('/validacion-login',UsuarioController.loginUsuario);
router.put('/update', ValidacionToken, validateUsuarioAC, UsuarioController.updateUsuario);
router.get('/selectSencillo', ValidacionToken, UsuarioController.getAllUsersSencillo);

module.exports = router;
 