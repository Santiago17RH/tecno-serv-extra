const UsuarioModel = require("../model/models/UsuarioModel");
const EquipoModel = require("../model/models/EquipoModel");
const HistorialMovModel = require("../model/models/HistorialMovModel");
const DocumentoFijoModel = require("../model/models/DocumentoFijoModel")
const UbicacionModel = require("../model/models/UbicacionModel");
const MarcaModel = require("../model/models/MarcaModel");
const AreaModel = require("../model/models/AreaModel");

const HistorialMovController = {


    //Como su nombre lo dice, en su momento fue una prueba exotica que no sirvio, claro esta


    getPruebaExotica: async (req, res) => {
        /* let { idEquipo, estado } = req.query;
    
        try {
            let equipoAsignado = await HistorialMovModel.findOne({include:{model: UsuarioModel}, where: { id_equipo: idEquipo, estado: estado } });
    
            res.status(200).json({ equipoAsignado, message: "Sisas mano, ahí está" });
        } catch (error) {
            console.error("Error al encontrar historial del susodicho equipo", error);
            res.status(500).json({
                message: "Error al obtener los historiales"
            });
        } */
    },


    //pa mirar los usuarios actuales de los susodichos equipos


    getActual: async (req, res) => {
        let { idEquipo} = req.query;
    
        try {
            let equipoAsignado = await HistorialMovModel.findOne({include:[{model: EquipoModel },{model: UsuarioModel, attributes:['doc_identidad','nombre'], include: [{
                model: AreaModel, attributes:['tipo_area']
            }, {
                model: UbicacionModel, attributes:['lugar']
            }]}], where: { id_equipo: idEquipo, estado: true } });
    
            res.status(200).json({ equipoAsignado, message: "Sisas mano, ahí está" });
        } catch (error) {
            console.error("Error al encontrar historial del susodicho equipo", error);
            res.status(500).json({
                message: "Error al obtener los historiales"
            });
        }
    },


    getAllHistorial: async (_req, res) => {
        try {
            let HistorialesCreados = await HistorialMovModel.findAll({
                include: [{
                    model: EquipoModel
                },{
                    model: UsuarioModel
                }
                /* ,{
                    model: DocumentoFijoModel
                } */]
            });
            console.log(HistorialesCreados);
            res.json({
                message: "Consulta realizada con exito",
                HistorialesCreados
            });
        } catch (error) {
            console.error("Error al obtener los historiales:", error);
            res.status(500).json({
                message: "Error al obtener los historiales"
            });
        }
    },

    createNewHistorial: async (req, res) => {
        try {
            let {
                idEquipo,
                rutaActa,
                observaciones,
                docIdentidad,
            } = req.body;

            const resutUpdateH = await HistorialMovModel.update({ estado: false }, { where: { id_equipo: idEquipo, estado: true } });
 // poner el estado en el fron en true siempre pa evitar cositas

 //   (comentario hecho despues de 5 dias despues que el comentario de arriba) no se que pensaba mi yo del pasado, bien marika si es
            if(resutUpdateH){
                let resultadoNewHistorial = await HistorialMovModel.create({
                    id_equipo: idEquipo,
                    ruta_acta: rutaActa,
                    observaciones: observaciones,
                    doc_identidad: docIdentidad,
                    estado: true
                });
    
                res.status(201).json({
                    message: "Historial Creado Con Exito",
                    resultadoNewHistorial,
                });
            }
        } catch (error) {
            console.error("Error al crear un nuevo historial:", error);
            res.status(500).json({ message: "Error al crear un nuevo historial"});
        }
    },

    /* updateHistorial: async (req, res) => {
        try {
            let {
                
            } = req.body;

            let resultadoAcUsuario = await HistorialMovModel.update({
               
            }, {
                where: {
                    
                }
            });

            res.json({
                message: "Historial Actualizado Con Exito",
                resultadoAcUsuario
            });
        } catch (error) {
            console.error("Error al actualizar historial:", error);
            res.status(500).json({
                message: "Error al actualizar historial"
            });
        }
    }, */
};    
module.exports = HistorialMovController;
