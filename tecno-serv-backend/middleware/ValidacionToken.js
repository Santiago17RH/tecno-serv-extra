const moment = require("moment");
const jwt = require("jwt-simple");

const ValidacionToken = (req,res,next)=>{

    let tokenEntrada = req.headers['token']

    if (!tokenEntrada) {
        return res.json({error:"Nesecita iniciar sesion pa entrar 1"})   
    }

    let contenidoToken ={}
    
    try{
        contenidoToken = jwt.decode(tokenEntrada,"contraseña")
    }catch (e){
        return res.json({error:"Nesecita iniciar sesion pa entrar"})
    }

    if (contenidoToken.fechaDeVencimiento < moment().unix()) {
        return res.json({error:"El area de tecnologia le ordena que inicie de nuevo su sesion"})
    }

    
    req.usuarioId = contenidoToken.docIdentidadUsuario;
    req.nombre = contenidoToken.nombreUsuario;
    req.usuarioRol = contenidoToken.rolUsuario;


    next();
}

module.exports = ValidacionToken