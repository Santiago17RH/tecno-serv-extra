const { Model, DataTypes} = require('sequelize');
const sequelize = require('../conexionbd');

class TipoEquipoModel extends Model {};

TipoEquipoModel.init({
id_tipo_equipo: {
    type: DataTypes.INTEGER(5),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
},
tipo_equipo: {
    type: DataTypes.STRING(30),
    allowNull: false
}

},{
    sequelize,
    modelName: 'tipo_equipo',
    timestamps:false,
    freezeTableName: true
});


module.exports = TipoEquipoModel