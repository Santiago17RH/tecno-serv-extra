const ProveedorModel = require("../model/models/ProveedorModel");

const ProveedorController = {
    getAllProveedores: async (req, res) => {
        try {
            let proveedoresCreados = await ProveedorModel.findAll();
            console.log(proveedoresCreados);
            res.json({ message: "Consulta realizada con exito", proveedoresCreados });
        } catch (error) {
            console.error("Error al obtener proveedores:", error);
            res.status(500).json({ message: "Error al obtener proveedores" });
        }
    },

    createNewProveedor: async (req, res) => {
        try {
            let {
                identificacionProv,
                nombre,
                descProveedor,
                numeroContacto,
                emailContacto
            } = req.body;
            let resultadoNewProveedor = await ProveedorModel.create({
                identificacion_prov: identificacionProv,
                nombre: nombre,
                desc_provee: descProveedor,
                numero_contacto: numeroContacto,
                email_contacto: emailContacto
            });
            res.status(201).json({
                message: "El Proveedor Se a Creado Con Exito",
                resultadoNewProveedor
            });
        } catch (error) {
            console.error("Error al crear un nuevo proveedor:", error);
            res.status(500).json({ message: "Error al crear un nueva área" });
        }
    },

    updateProveedor: async (req, res) => {
        try {
            let {
                identificacionProv,
                nombre,
                descProveedor,
                numeroContacto,
                emailContacto
            } = req.body;
            let resultadoNewProveedor = await ProveedorModel.update({
                identificacion_prov: identificacionProv,
                nombre: nombre,
                desc_provee: descProveedor,
                numero_contacto: numeroContacto,
                email_contacto: emailContacto
            }, {
                where: {
                    identificacion_prov: identificacionProv 
                }
            });
            res.status(201).json({
                message: "El Proveedor Se a Actualizado Con Exito",
                resultadoNewProveedor
            });
        } catch (error) {
            console.error("Error al actualizar proveedor:", error);
            res.status(500).json({ message: "Error al actualizar proveedor" });
        }
    }
};

module.exports = ProveedorController;