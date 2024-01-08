const AreaModel = require("../model/models/AreaModel");

const AreaController = {
    getAllAreas: async (req, res) => {
        try {
            let areasCreadas = await AreaModel.findAll();
            console.log(areasCreadas);
            res.json({ message: "Consulta realizada con exito", areasCreadas });
        } catch (error) {
            console.error("Error al obtener áreas:", error);
            res.status(500).json({ message: "Error al obtener áreas" });
        }
    },

    createNewArea: async (req, res) => {
        try {
            let { areaUsuario } = req.body;
            let resultadoArea = await AreaModel.create({ tipo_area: areaUsuario });
            res.json({ message: "Área Creada Con Éxito", resultadoArea });
        } catch (error) {
            console.error("Error al crear un nueva área:", error);
            res.status(500).json({ message: "Error al crear un nueva área" });
        }
    },

    updateArea: async (req, res) => {
        try {
            let { idArea, areaUsuario } = req.body;
            let resultadoAcArea = await AreaModel.update(
                { tipo_area: areaUsuario },
                { where: { id_area: idArea } }
            );
            res.json({ message: "Área Actualizada Con Éxito", resultadoAcArea });
        } catch (error) {
            console.error("Error al actualizar área:", error);
            res.status(500).json({ message: "Error al actualizar área" });
        }
    }
};

module.exports = AreaController;