const FirmaModel = require("../model/models/FirmaModel");

const FirmaController = {
    getFirmas: async (req, res) => {
        try {
            let firma = await FirmaModel.findOne();
            res.json({ message: "Consulta realizada con éxito", firma });
        } catch (error) {
            console.error("Error al obtener firma:", error);
            res.status(500).json({ message: "Error al obtener firma" });
        }
    },

    createNewFirma: async (req, res) => {
        try {
           
        } catch (error) {
            console.error("Error al crear una nueva firma:", error);
            res.status(500).json({ message: "Error al crear una nueva firma" });
        }
    },

    updateFirma: async (req, res) => {
        try {

        } catch (error) {
            console.error("Error al actualizar firma:", error);
            res.status(500).json({ message: "Error al actualizar firma" });
        }
    }
};

module.exports = FirmaController;
