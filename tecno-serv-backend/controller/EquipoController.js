const EquipoModel = require("../model/models/EquipoModel");


const EquipoController = {
    getAllEquipos: async (req, res) => {
        try {
            let equiposCreados = await EquipoModel.findAll();
            res.json({ message: "Consulta realizada con éxito", equiposCreados });
        } catch (error) {
            console.error("Error al obtener equipos:", error);
            res.status(500).json({ message: "Error al obtener equipos" });
        }
    },

    createNewEquipo: async (req, res) => {
        try{
            let{
                identificacionProv,
                placaNumeroSerie,
                marca,
                tipoEquipo,
                contingencia,
                procesador,
                descripcion,
                sistemaOperativo,
                ram,
                almacenamiento,
                estado
            } = req.body;

            let resultadoNewEquipo = await EquipoModel.create({
                identificacion_prov: identificacionProv,
                placa_numero_serie: placaNumeroSerie,
                marca_fk: marca,
                tipo_equipo_fk: tipoEquipo,
                contingencia: contingencia,
                procesador: procesador,
                descripcion: descripcion,
                sistema_operativo: sistemaOperativo,
                ram: ram,
                almacenamiento: almacenamiento,
                estado_fk: estado,

            });
            res.status(201).json({
                message: "Equipo Creado Con Exito",
                resultadoNewEquipo
            });
        } catch (error) {
            console.error("Error al crear un nuevo equipo:", error);
            res.status(500).json({ message: "Error al crear un nuevo equipo" });
        }
    },

    updateEquipo: async (req, res) => {
        try {
            let {
                idEquipo,
                identificacionProv,
                placaNumeroSerie,
                marca,
                tipoEquipo,
                contingencia,
                procesador,
                descripcion,
                sistemaOperativo,
                ram,
                almacenamiento,
                estado
            } = req.body;

            let resultadoAcEquipo = await EquipoModel.update({
                identificacion_prov: identificacionProv,
                placa_numero_serie: placaNumeroSerie,
                marca_fk: marca,
                tipo_equipo_fk: tipoEquipo,
                contingencia: contingencia,
                procesador: procesador,
                descripcion: descripcion,
                sistema_operativo: sistemaOperativo,
                ram: ram,
                almacenamiento: almacenamiento,
                estado_fk: estado,
            }, {
                where: {
                    id_equipo: idEquipo
                }
            });

            res.json({
                message: "Equipo Actualizado Con Exito",
                resultadoAcEquipo
            });
        } catch (error) {
            console.error("Error al actualizar equipo:", error);
            res.status(500).json({
                message: "Error al actualizar equipo"
            });
        }
    }
};

module.exports = EquipoController;
