const fs = require('fs').promises;
const path = require('path');

const FirmaModel = require("../model/models/FirmaModel");
const { where } = require('sequelize');

const FirmaController = {
    getFirma: async (req, res) => {
        try {
            let {docIdentidadUsuario} = req.body;
            let firma = await FirmaModel.findOne({where: {doc_identidad: docIdentidadUsuario}});
            res.json({ message: "Consulta realizada con éxito", firma });
        } catch (error) {
            console.error("Error al obtener firma:", error);
            res.status(500).json({ message: "Error al obtener firma" });
        }
    },

    createNewFirma: async (req, res) => {
        try {

            let firma = await FirmaModel.findOne({ where: { doc_identidad: req.usuarioId } });
    
            if (firma) {
                console.log("_______________________________");
                console.log("ya tiene, toca actualizar paire");
    
                // Obtener la ruta de la imagen existente desde la base de datos
        const rutaCompleta = path.join(__dirname, '..', firma.img);
        console.log(rutaCompleta)              
                // Verificar si el archivo existe antes de intentar eliminarlo
                await fs.access(rutaCompleta);
                // Eliminar el archivo existente
                await fs.unlink(rutaCompleta);
                console.log(`La imagen en ${rutaCompleta} ha sido eliminada con éxito.`);
            }
            // Utilizar el nombre del archivo almacenado en req.fileName
            const filePath = path.join(__dirname, '/image', `/${req.ahora}_${req.file.originalname}`);
            // Agregar información a la consola para depuración
            console.log("Ruta del archivo:", filePath);
            // Guardar la información en la base de datos
            let resultadoNewFirma = await FirmaModel.upsert({
                doc_identidad: req.usuarioId,
                img: `/image/${req.ahora}_${req.file.originalname}`
            });
            res.status(201).json({
                message: "Firma Creada Con Éxito",
                resultadoNewFirma,
            });
        } catch (error) {
            console.error("Error al crear una nueva firma:", error);
            res.status(500).json({ message: "Error al crear una nueva firma" });
        }
    },
        
    updateFirma: async (req, res) => {
        try {
            // Toca mirar pa, ya tu sabe cabron
        } catch (error) {
            console.error("Error al actualizar firma:", error);
            res.status(500).json({ message: "Error al actualizar firma" });
        }
    }
};

module.exports = FirmaController;
