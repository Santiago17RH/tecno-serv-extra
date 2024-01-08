const { Model, DataTypes} = require('sequelize');
const sequelize = require('../conexionbd');

class EstadoModel extends Model {};

EstadoModel.init({
id_estado: {
    type: DataTypes.INTEGER(5),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
},
estado: {
    type: DataTypes.STRING(30),
    allowNull: false
}

},{
    sequelize,
    modelName: 'estado',
    timestamps:false,
    freezeTableName: true
});


module.exports = EstadoModel