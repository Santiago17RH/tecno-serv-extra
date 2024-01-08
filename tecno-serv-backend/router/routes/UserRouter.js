const express = require('express');
const UsuarioController = require('../../controller/UsuarioController');
const ValidacionToken = require('../../middleware/ValidacionToken');
const { validateUsuario } = require('../../validator/usuarioValidator')

const router = express.Router();

router.post('/create' , validateUsuario, UsuarioController.createNewUser);
router.get('/select', ValidacionToken, UsuarioController.getAllUsers);
router.post('/validacion-login',UsuarioController.loginUsuario);
router.put('/update', ValidacionToken, validateUsuario, UsuarioController.updateUsuario);
module.exports = router;
 