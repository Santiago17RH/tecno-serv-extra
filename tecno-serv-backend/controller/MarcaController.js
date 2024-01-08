const MarcaModel = require("../model/models/MarcaModel");

const MarcaController = {
    getAllMarcas: async (req, res) => {
        try {
            let MarcasCreadas = await MarcaModel.findAll();
            console.log(MarcasCreadas);
            res.json({ message: "Consulta realizada con exito", MarcasCreadas });
        } catch (error) {
            console.error("Error al obtener marcas:", error);
            res.status(500).json({ message: "Error al obtener marcas" });
        }
    },

    createNewMarca: async (req, res) => {
        try {
            let { marca } = req.body;
            let resultadoMarca = await MarcaModel.create({ marca: marca });
            res.json({ message: "Marca Creada Con Éxito", resultadoMarca });
        } catch (error) {
            console.error("Error al crear una nueva marca:", error);
            res.status(500).json({ message: "Error al crear una nueva marca" });
        }
    },

    updateMarca: async (req, res) => {
        try {
            let { idMarca, marca} = req.body;
            let resultadoAcMarca = await MarcaModel.update(
                { marca: marca },
                { where: { id_marca: idMarca } }
            );
            res.json({ message: "La Marca Del Dispositivo Fue Actualizada Con Éxito", resultadoAcMarca });
        } catch (error) {
            console.error("Error al actualizar marca:", error);
            res.status(500).json({ message: "Error al actualizar marca" });
        }
    }
};

module.exports = MarcaController;