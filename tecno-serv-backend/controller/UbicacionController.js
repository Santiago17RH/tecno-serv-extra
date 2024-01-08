const UbicacionModel = require("../model/models/UbicacionModel");

const UbicacionController = {
    getAllUbicaciones: async (req, res) => {
        try {
            console.log(req.usuarioId);
            let ubicacionesCreadas = await UbicacionModel.findAll();
            console.log(ubicacionesCreadas);
            res.json({ message: "Consulta realizada con exito", ubicacionesCreadas });
        } catch (error) {
            console.error("Error al obtener ubicaciones:", error);
            res.status(500).json({ message: "Error al obtener ubicaciones" });
        }
    },

    createNewUbicacion: async (req, res) => {
        try {
            let { ubicacionUsuario } = req.body;
            let resultadoUbicacion = await UbicacionModel.create({ lugar: ubicacionUsuario });
            res.json({ message: "Ubicacion Creada Con Exito", resultadoUbicacion });
        } catch (error) {
            console.error("Error al crear una nueva ubicacion:", error);
            res.status(500).json({ message: "Error al crear una nueva ubicacion" });
        }
    },

    updateUbicacion: async (req, res) => {
        try {
            let { idUbicacion, lugarUbicacion } = req.body;
            let ubicacionExistente = await UbicacionModel.findByPk(idUbicacion);
            if (!ubicacionExistente) {
                res.status(404).json({ message: "Ubicacion no encontrada" });
                return;
            }

            let resultadoAcUbicacion = await UbicacionModel.update({ lugar: lugarUbicacion }, { where: { id_ubicacion: idUbicacion } });
            res.json({ message: "Ubicacion Actualizada Con Exito", resultadoAcUbicacion });
        } catch (error) {
            console.error("Error al actualizar ubicacion:", error);
            res.status(500).json({ message: "Error al actualizar ubicacion" });
        }
    }
};

module.exports = UbicacionController;
