const { Model, DataTypes} = require('sequelize');
const sequelize = require('../conexionbd');

class AreaModel extends Model {};

AreaModel.init({
id_area: {
    type: DataTypes.INTEGER(5),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
},
tipo_area: {
    type: DataTypes.STRING(30),
    allowNull: false
}

},{
    sequelize,
    modelName: 'area',
    timestamps:false,
    freezeTableName: true
});

module.exports = AreaModel