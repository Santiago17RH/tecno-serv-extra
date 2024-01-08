const RolModel = require("../model/models/RolModel");

const RolController = {
    getAllRoles: async (req, res) => {
        try {
            let rolesCreados = await RolModel.findAll();
            console.log(rolesCreados);
            res.json({ message: "Consulta realizada con exito", rolesCreados });
        } catch (error) {
            console.error("Error al obtener roles:", error);
            res.status(500).json({ message: "Error al obtener roles" });
        }
    },

    createNewRol: async (req, res) => {
        try {
            let { rolUsuario } = req.body;
            let resultadoRol = await RolModel.create({ tipo_rol: rolUsuario });
            res.json({ message: "Rol Creado Con Exito", resultadoRol });
        } catch (error) {
            console.error("Error al crear un nuevo rol:", error);
            res.status(500).json({ message: "Error al crear un nuevo rol" });
        }
    },

    updateRol: async (req, res) => {
        try {
            let { idRol, rolUsuario } = req.body;
            let resultadoAcRol = await RolModel.update(
                { tipo_rol: rolUsuario },
                { where: { id_rol: idRol } }
            );
            res.json({ message: "Rol Actualizado Con Exito", resultadoAcRol });
        } catch (error) {
            console.error("Error al actualizar rol:", error);
            res.status(500).json({ message: "Error al actualizar rol" });
        }
    }
};

module.exports = RolController;
