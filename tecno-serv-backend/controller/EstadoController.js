const EstadoModel = require("../model/models/EstadoModel");

const EstadoController = {
    getAllEstados: async (req, res) => {
        try {
            let EstadosCreados = await EstadoModel.findAll();
            console.log(EstadosCreados);
            res.json({ message: "Consulta realizada con exito", EstadosCreados });
        } catch (error) {
            console.error("Error al obtener estados:", error);
            res.status(500).json({ message: "Error al obtener estados"});
        }
    },

    createNewEstado: async (req, res) => {
        try {
            let { estadoEquipo } = req.body;
            let resultadoEstado = await EstadoModel.create({ estado: estadoEquipo });
            res.json({ message: "Estado Creado Con Éxito", resultadoEstado });
        } catch (error) {
            console.error("Error al crear un nuevo estado:", error);
            res.status(500).json({ message: "Error al crear un nuevo estado" });
        }
    },

    updateEstado: async (req, res) => {
        try {
            let { idEstado, estadoEquipo } = req.body;
            let resultadoAcEstado = await EstadoModel.update(
                { estado: estadoEquipo },
                { where: { id_Estado: idEstado } }
            );
            res.json({ message: "Estado Actualizado Con Éxito", resultadoAcEstado });
        } catch (error) {
            console.error("Error al actualizar estado:", error);
            res.status(500).json({ message: "Error al actualizar estado" });
        }
    }
};

module.exports = EstadoController;