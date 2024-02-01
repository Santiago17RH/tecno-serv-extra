const { Model, DataTypes } = require('sequelize');
const sequelize = require('../conexionbd');

class ModificacionPCModel extends Model {};

ModificacionPCModel.init({
id_modificacion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
    },
id_equipo: {
    type: DataTypes.INTEGER,
    allowNull: false
    },
identificacion_prov: {
    type: DataTypes.STRING(15),
    allowNull: false
    },
tipo_equipo_fk:{
    type: DataTypes.INTEGER(5),
    allowNull: false
    },
procesador:{
    type: DataTypes.STRING(30),
    allowNull: false
    },
nombre_red:{
    type: DataTypes.STRING(50),
    allowNull: false
    },
sistema_operativo:{
    type: DataTypes.STRING(30),
    allowNull: false
    },
ram:{
    type: DataTypes.STRING(20),
    allowNull: false
    },
almacenamiento:{
    type: DataTypes.STRING(20),
    allowNull: false
  }
  },{
    sequelize,
    modelName: 'modificaciones_equipo',
    timestamps: true,
    freezeTableName: true
  });

module.exports = ModificacionPCModel;