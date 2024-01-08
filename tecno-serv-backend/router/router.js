const ValidacionToken = require('../middleware/ValidacionToken');

const router = require('express').Router()

router.post('/saludo', (req,res)=>{
    const nombreUser = req.body.nombre
    res.json('Hola'+nombreUser)
})

router.use('/usuario', require('./routes/UserRouter'));
router.use('/area', ValidacionToken, require('./routes/AreaRouter'));
router.use('/rol', ValidacionToken, require('./routes/RolRouter'));
router.use('/ubicacion', ValidacionToken, require('./routes/UbicacionRouter'));



router.use('/computo', ValidacionToken, require('./routes/EquipoComputo'));
router.use('/proveedor', ValidacionToken, require('./routes/ProveedorRouter'));
router.use('/marca', ValidacionToken, require('./routes/MarcaRouter'));
router.use('/tipoEquipo', ValidacionToken, require('./routes/TipoEquipoRouter'));
router.use('/estado', ValidacionToken, require('./routes/EstadoRouter'));
router.use('/tipoDocumento', ValidacionToken, require('./routes/TipoDocumentoRouter'));

module.exports = router


"UserRouter.js"

