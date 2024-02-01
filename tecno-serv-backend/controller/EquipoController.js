const EquipoModel = require("../model/models/EquipoModel");
const MarcaModel = require("../model/models/MarcaModel");
const TipoEquipoModel = require("../model/models/TipoEquipoModel");
const EstadoModel = require("../model/models/EstadoModel");
const HistorialMovModel= require("../model/models/HistorialMovModel");
const UsuarioModel = require("../model/models/UsuarioModel");
const UbicacionModel = require("../model/models/UbicacionModel");
const AreaModel = require("../model/models/AreaModel");


//El que lea esto es marika


const EquipoController = {


    // lo mismo de abajo pero mas aestetik, pero se uso el de abajo pa mas facilidad en el front xdxd


     /* getEquipoUsuario_1: async (req, res) => {
        try {
            let { idEquipo } = req.query;

            const historial = await HistorialMovModel.findOne({
                attributes: ['id_equipo', 'doc_identidad', 'estado'],
                where: {
                    id_equipo: idEquipo,
                    estado: true
                }
            });

            if (!historial) {

                let equipoSolito = await EquipoModel.findOne({
                    where: {
                        id_equipo: idEquipo,
                    }
                })

                return res.status(404).json({
                    message: "No se encontró historial activo para el equipo.",
                    equipoSolito

                });
            }
    
            const usuario = await UsuarioModel.findOne({
                attributes: ['doc_identidad', 'nombre', 'ubicacion_fk'],
                where: {
                    doc_identidad: historial.doc_identidad
                }
            });
    
            if (!usuario) {
                return res.status(404).json({
                    message: "No se encontró información de usuario para el historial."
                });
            }

            const usuarioUbicacion = await UbicacionModel.findOne({
                attributes: ['lugar'],
                where: {
                    id_ubicacion: usuario.ubicacion_fk
                }
            });

            const equipoUsuario = {
                id_equipo: historial.id_equipo,
                doc_identidad: historial.doc_identidad,
                estado: historial.estado,
                usuario: {
                    doc_identidad: usuario.doc_identidad,
                    nombre: usuario.nombre,
                    ubicacion_fk: usuario.ubicacion_fk,
                    lugar: {
                        lugar: usuarioUbicacion.lugar,
                    }
                }
                
            };
    
            res.json({
                message: "Consulta realizada con éxito",
                equipoUsuario
            });
        } catch (error) {
            console.error("Error al obtener equipos:", error);
            res.status(500).json({ message: "Error al obtener equipos" });
        }
    },  */


    //----------------------------------------------------------
   // pa traer los datos requeridos para el simple pero delicado acto de hacer una acta para otorgar equipos de computo a individuos con proposito simple pero importante
    
   getEquipoActa: async (req, res) => {
    try {
        let { idEquipo } = req.query;
        const infoActa = await EquipoModel.findAll({
            where: { id_equipo: idEquipo },
            include: [{
                model: MarcaModel
            }, {
                model: TipoEquipoModel
            }, {
                model: EstadoModel
            },{ model: HistorialMovModel, as: 'historial', where: { estado: true },required: false,include: {model: UsuarioModel, include:[{model: UbicacionModel},{model: AreaModel}] }}]
          });
        console.log(infoActa);
        res.json({
            message: "Consulta realizada con exito",
            infoActa
        });


    } catch (error) {
        console.error("Error al obtener equipos:", error);
        res.status(500).json({ message: "Error al obtener equipos" });
    }
},

    getEquipoUsuario: async (req, res) => {
        try {
            /* let { idEquipo } = req.query; */
            const equipoConHistorial = await EquipoModel.findAll({
                /* where: { id_equipo: idEquipo }, */
                include: [{
                    model: MarcaModel/* , attributes:['marca'] */
                }, {
                    model: TipoEquipoModel/* , attributes:['tipo_equipo'] */
                }, {
                    model: EstadoModel/* , attributes:['estado'] */
                },{ model: HistorialMovModel, as: 'historial', where: { estado: true },required: false, attributes:['estado'],include: {model: UsuarioModel, attributes:['doc_identidad','nombre'], include:{model: UbicacionModel}, include:{model: AreaModel} }}]
              });
            console.log(equipoConHistorial);
            res.json({
                message: "Consulta realizada con exito",
                equipoConHistorial
            });


        } catch (error) {
            console.error("Error al obtener equipos:", error);
            res.status(500).json({ message: "Error al obtener equipos" });
        }
    },


    //Trae el historial entero de un equipo


    getAllEquipoHistorial: async (req, res) => {
        try {
            let { idEquipo } = req.query;
            const equipoConHistorial = await EquipoModel.findOne({attributes:['id_equipo'],
                where: { id_equipo: idEquipo },
                include: [{ model: HistorialMovModel, as: 'historial',include:{model: UsuarioModel, attributes: ['nombre'], include:[{model: UbicacionModel}, {model: AreaModel}]}}]
              });
            console.log(equipoConHistorial);
            res.json({
                message: "Consulta realizada con exito",
                equipoConHistorial
            });
        } catch (error) {
            console.error("Error al obtener equipos:", error);
            res.status(500).json({ message: "Error al obtener equipos" });
        }
    },

    getAllEquipos: async (req, res) => {
        try {
            let equiposCreados = await EquipoModel.findAll({
                include: [{
                    model: MarcaModel/* , attributes:['marca'] */
                }, {
                    model: TipoEquipoModel/* , attributes:['tipo_equipo'] */
                }, {
                    model: EstadoModel/* , attributes:['estado'] */
                }]
            });
            console.log(equiposCreados);
            res.json({
                message: "Consulta realizada con exito",
                equiposCreados
            });
        } catch (error) {
            console.error("Error al obtener equipos:", error);
            res.status(500).json({ message: "Error al obtener equipos" });
        }
    },

    createNewEquipo: async (req, res) => {
        try{
            let{
                identificacionProv,
                placaNumeroSerie,
                marca,
                tipoEquipo,
                contingencia,
                procesador,
                nombreRed,
                sistemaOperativo,
                ram,
                almacenamiento,
                estado
            } = req.body;

            let resultadoNewEquipo = await EquipoModel.create({
                identificacion_prov: identificacionProv,
                placa_numero_serie: placaNumeroSerie,
                marca_fk: marca,
                tipo_equipo_fk: tipoEquipo,
                contingencia: contingencia,
                procesador: procesador,
                nombre_red: nombreRed,
                sistema_operativo: sistemaOperativo,
                ram: ram,
                almacenamiento: almacenamiento,
                estado_fk: estado,

            });
            res.status(201).json({
                message: "Equipo Creado Con Exito",
                resultadoNewEquipo
            });
        } catch (error) {
            console.error("Error al crear un nuevo equipo:", error);
            res.status(500).json({ message: "Error al crear un nuevo equipo" });
        }
    },

    updateEquipo: async (req, res) => {
        try {
            let {
                idEquipo,
                identificacionProv,
                placaNumeroSerie,
                marca,
                tipoEquipo,
                contingencia,
                procesador,
                nombreRed,
                sistemaOperativo,
                ram,
                almacenamiento,
                estado
            } = req.body;

            let resultadoAcEquipo = await EquipoModel.update({
                identificacion_prov: identificacionProv,
                placa_numero_serie: placaNumeroSerie,
                marca_fk: marca,
                tipo_equipo_fk: tipoEquipo,
                contingencia: contingencia,
                procesador: procesador,
                nombre_red: nombreRed,
                sistema_operativo: sistemaOperativo,
                ram: ram,
                almacenamiento: almacenamiento,
                estado_fk: estado,
            }, {
                where: {
                    id_equipo: idEquipo
                }
            });

            res.json({
                message: "Equipo Actualizado Con Exito",
                resultadoAcEquipo
            });
        } catch (error) {
            console.error("Error al actualizar equipo:", error);
            res.status(500).json({
                message: "Error al actualizar equipo"
            });
        }
    }
};

module.exports = EquipoController;
















/* getEquipoUsuario: async (req, res) => {
    try {
        let { idEquipo } = req.query;

        const historial = await HistorialMovModel.findOne({
            attributes: ['id_equipo', 'doc_identidad', 'estado'],
            where: {
                id_equipo: idEquipo,
                estado: true
            }
        });

        if (!historial) {

            let equipoSolito = await EquipoModel.findOne({
                where: {
                    id_equipo: idEquipo,
                }
            })

            return res.status(404).json({
                message: "No se encontró historial activo para el equipo.",
                equipoSolito

            });
        }

        const usuario = await UsuarioModel.findOne({
            attributes: ['doc_identidad', 'nombre', 'ubicacion_fk'],
            where: {
                doc_identidad: historial.doc_identidad
            }
        });

        if (!usuario) {
            return res.status(404).json({
                message: "No se encontró información de usuario para el historial."
            });
        }

        const usuarioUbicacion = await UbicacionModel.findOne({
            attributes: ['lugar'],
            where: {
                id_ubicacion: usuario.ubicacion_fk
            }
        });

        const equipoUsuario = {
            id_equipo: historial.id_equipo,
            doc_identidad: historial.doc_identidad,
            estado: historial.estado,
            usuario: {
                doc_identidad: usuario.doc_identidad,
                nombre: usuario.nombre,
                ubicacion_fk: usuario.ubicacion_fk,
                lugar: {
                    lugar: usuarioUbicacion.lugar,
                }
            }
            
        };

        res.json({
            message: "Consulta realizada con éxito",
            equipoUsuario
        });
    } catch (error) {
        console.error("Error al obtener equipos:", error);
        res.status(500).json({ message: "Error al obtener equipos" });
    }
},  */