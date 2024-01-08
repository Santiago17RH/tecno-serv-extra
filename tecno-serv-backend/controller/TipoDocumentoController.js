const TipoDocumentoModel = require("../model/models/TipoDocumentoModel");

const TipoDocumentoController = {
    getAllTipoDocumentos: async (req, res) => {
        try {
            let TipoDocumentosCreadas = await TipoDocumentoModel.findAll();
            console.log(TipoDocumentosCreadas);
            res.json({ message: "Consulta realizada con exito", TipoDocumentosCreadas });
        } catch (error) {
            console.error("Error al obtener los tipos de documentos:", error);
            res.status(500).json({ message: "Error al obtener los tipo de documentos" });
        }
    },

    createNewTipoDocumento: async (req, res) => {
        try {
            let { TipoDocumento } = req.body;
            let resultadoTipoDocumento = await TipoDocumentoModel.create({ tipo: TipoDocumento });
            res.json({ message: "Tipo de Documento Creado Con Éxito", resultadoTipoDocumento });
        } catch (error) {
            console.error("Error al crear un nuevo tipo de documento:", error);
            res.status(500).json({ message: "Error al crear un nuevo tipo de documento" });
        }
    },

    updateTipoDocumento: async (req, res) => {
        try {
            let { idTipoDocumento, TipoDocumento} = req.body;
            let resultadoAcTipoDocumento = await TipoDocumentoModel.update(
                { tipo: TipoDocumento },
                { where: { id_tipo_doc: idTipoDocumento } }
            );
            res.json({ message: "El Tipo de Documento Fue Actualizada Con Éxito", resultadoAcTipoDocumento });
        } catch (error) {
            console.error("Error al actualizar el tipo de Documento:", error);
            res.status(500).json({ message: "Error al actualizar el tipo de documento" });
        }
    }
};

module.exports = TipoDocumentoController;