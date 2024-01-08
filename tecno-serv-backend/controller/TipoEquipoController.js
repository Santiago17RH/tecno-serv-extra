const TipoEquipoModel = require("../model/models/TipoEquipoModel");

const TipoEquipoController = {
    getAllTipoEquipos: async (req, res) => {
        try {
            let TipoEquiposCreados = await TipoEquipoModel.findAll();
            console.log(TipoEquiposCreados);
            res.json({ message: "Consulta realizada con exito", TipoEquiposCreados });
        } catch (error) {
            console.error("Error al obtener Tipo de Equipos:", error);
            res.status(500).json({ message: "Error al obtener Tipo de Equipos" });
        }
    },

    createNewTipoEquipo: async (req, res) => {
        try {
            let { TipoEquipo } = req.body;
            let resultadoTipoEquipo = await TipoEquipoModel.create({ tipo_equipo: TipoEquipo });
            res.json({ message: "Tipo de Equipo Creado Con Éxito", resultadoTipoEquipo });
        } catch (error) {
            console.error("Error al crear un nuevo Tipo de Equipo:", error);
            res.status(500).json({ message: "Error al crear un nuevo Tipo de Equipo" });
        }
    },

    updateTipoEquipo: async (req, res) => {
        try {
            let { idTipoEquipo, TipoEquipo} = req.body;
            let resultadoAcTipoEquipo = await TipoEquipoModel.update(
                { tipo_equipo: TipoEquipo },
                { where: { id_tipo_equipo: idTipoEquipo } }
            );
            res.json({ message: "Tipo de Equipo Fue Actualizada Con Éxito", resultadoAcTipoEquipo });
        } catch (error) {
            console.error("Error al actualizar Tipo de Equipo:", error);
            res.status(500).json({ message: "Error al actualizar Tipo de Equipo" });
        }
    }
};

module.exports = TipoEquipoController;