const { Model, DataTypes } = require('sequelize');
const sequelize = require('../conexionbd');

class HistorialMovModel extends Model {};

HistorialMovModel.init({
id_historial: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
    },
id_equipo: {
    type: DataTypes.INTEGER,
    allowNull: false
    },
ruta_acta: {
    type: DataTypes.STRING(50),
    allowNull: false
    },
    observaciones: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    doc_identidad: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    estado: {
      type: DataTypes.BOOLEAN
    }
  },{
    sequelize,
    modelName: 'historial_movimientos',
    timestamps: true,
    freezeTableName: true
  });

module.exports = HistorialMovModel
