const { query } = require('express-validator');
const AreaModel = require("../model/models/AreaModel");
const CredencialModel = require("../model/models/CredencialModel");
const RolModel = require("../model/models/RolModel");
const UbicacionModel = require("../model/models/UbicacionModel");
const UsuarioModel = require("../model/models/UsuarioModel");
const bcrypt = require("bcrypt");
const moment = require("moment");
const jwt = require("jwt-simple");

const UsuarioController = {

    getAllUsersSencillo: async (_req, res) => {
        try {
            let usuariosCreadosSencillo = await UsuarioModel.findAll({
                attributes: ['doc_identidad','nombre']
            });
            console.log(usuariosCreadosSencillo);
            res.json({
                message: "Consulta realizada con exito",
                usuariosCreadosSencillo
            });
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
            res.status(500).json({
                message: "Error al obtener usuarios"
            });
        }
    },

    getAllUsers: async (_req, res) => {
        try {
            let usuariosCreados = await UsuarioModel.findAll({
                include: [{
                    model: RolModel/* , attributes:['tipo_rol'] */
                }, {
                    model: AreaModel/* , attributes:['tipo_area'] */
                }, {
                    model: UbicacionModel/* , attributes:['lugar'] */
                }]
            });
            console.log(usuariosCreados);
            res.json({
                message: "Consulta realizada con exito",
                usuariosCreados
            });
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
            res.status(500).json({
                message: "Error al obtener usuarios"
            });
        }
    },
//Solo pa casos extremos no fake ultima version apk link directo mediafire minecraft pe 1.12.95
    createCredencialesCargueMasivo: async (req, res) => {
        try {
            // Consultar los usuarios que no tienen una credencial asociada
            let usuariosEPA = await UsuarioModel.findAll({
                attributes: ['doc_identidad', 'nombre'],
                include: { model: CredencialModel, attributes: ['doc_identidad'], required: false }
            });
    
            if (usuariosEPA.length > 0) {
                for (let i = 0; i < usuariosEPA.length; i++) {
                    let usuario = usuariosEPA[i];
                    if (!usuario.CredencialModel) {
                        console.log(`Usuario sin credencial: ${usuario.doc_identidad}`);
    
                        let contraseñaEncriptada = await bcrypt.hashSync(usuario.doc_identidad, 10);
    
                        let resultadoCredencial = await CredencialModel.create({
                            doc_identidad: usuario.doc_identidad,
                            contraseña: contraseñaEncriptada
                        });
    
                        console.log("Credencial creada:", resultadoCredencial);
                    } else {
                        console.log(`El usuario ${usuario.doc_identidad} ya tiene una credencial.`);
                    }
                }
            } else {
                console.log("No hay usuarios sin credenciales.");
            }
    
            res.json({
                message: "Consulta realizada con éxito",
                usuariosEPA
            });
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
            res.status(500).json({
                message: "Error al obtener usuarios"
            });
        }
    },

        //Ciclo que recorra usuarios sin credencial y que inserte en la tabla credenciales, donde contraseña sea el documento, la foranea es el documeno tambien
        /* for (const iterator of object) {
            
        } */

    createNewUser: async (req, res) => {

        

        try {
            let {
                docIdentidadUsuario,
                nombreUsuario,
                correo,
                rolUsuario,
                areaUsuario,
                ubicacionUsuario,
                contraseña,
                estadoUsuario
            } = req.body;

            let contraseñaEncriptada = await bcrypt.hashSync(contraseña, 10);

            let resultadoNewUsuario = await UsuarioModel.create({
                doc_identidad: docIdentidadUsuario,
                nombre: nombreUsuario,
                correo: correo,
                rol_fk: rolUsuario,
                area_fk: areaUsuario,
                ubicacion_fk: ubicacionUsuario,
                estado_usuario: estadoUsuario
            });

            let resultadoCredencial = await CredencialModel.create({
                doc_identidad: resultadoNewUsuario.doc_identidad,
                contraseña: contraseñaEncriptada
            });

            res.status(201).json({
                message: "Usuario Creado Con Exito",
                resultadoNewUsuario,
                resultadoCredencial
            });
        } catch (error) {
            if (error.name=="SequelizeUniqueConstraintError") {
                console.log("Error Duplicados")
                res.status(403)
                res.send({errors: [{msg:"El documento de identificación ya existe"}]})
            }else{
                console.error("Error al crear un nuevo usuario:", error);
                res.status(500).json({
                    message: "Error al crear un nuevo usuario"
                });
            }


        }
    },

    updateUsuario: async (req, res) => {
        try {
            let {
                docIdentidadUsuario,
                nombreUsuario,
                correo,
                rolUsuario,
                areaUsuario,
                ubicacionUsuario,
                estadoUsuario
            } = req.body;

            let resultadoAcUsuario = await UsuarioModel.update({
                nombre: nombreUsuario,
                correo: correo,
                rol_fk: rolUsuario,
                area_fk: areaUsuario,
                ubicacion_fk: ubicacionUsuario,
                estado_usuario: estadoUsuario
            }, {
                where: {
                    doc_identidad: docIdentidadUsuario
                }
            });

            res.json({
                message: "Usuario Actualizado Con Exito",
                resultadoAcUsuario
            });
        } catch (error) {
            console.error("Error al actualizar usuario:", error);
            res.status(500).json({
                message: "Error al actualizar usuario"
            });
        }
    },

    loginUsuario: async (req, res) => {
        try {
            let {
                docIdentidadUsuario,
                contraseña
            } = req.body;

            let validacion = await CredencialModel.findOne({
                where: {
                    doc_identidad: docIdentidadUsuario
                }
            });

            if (validacion) {
                let validacionContraseña = await bcrypt.compareSync(contraseña, validacion.contraseña);
                if (validacionContraseña) {
                    const usuarioLogueado = await UsuarioModel.findOne({
                        where: {
                            doc_identidad: docIdentidadUsuario
                        }
                    });
                    res.json({
                        token: crearTokenLogin(usuarioLogueado)
                    });
                } else {
                    res.json({
                        message: "Usted no pertenece aca so"
                    });
                }
            } else {
                res.json({
                    message: "Usted no pertenece aca so"
                });
            }
        } catch (error) {
            console.error("Error al realizar el login:", error);
            res.status(500).json({
                message: "Error al realizar el login"
            });
        }
    }
};

const crearTokenLogin = (datosUsuario) => {
    try {
        const contenidoToken = {
            docIdentidadUsuario: datosUsuario.doc_identidad,
            nombreUsuario: datosUsuario.nombre,
            rolUsuario: datosUsuario.rol_fk,
            fechaDeCreacion: moment().unix(),
            fechaDeVencimiento: moment().add(60, "minutes").unix()
        };
        const token = jwt.encode(contenidoToken, "contraseña");
        return token;
    } catch (error) {
        console.error("Error al crear el token:", error);
        throw error;
    }
};

module.exports = UsuarioController;
