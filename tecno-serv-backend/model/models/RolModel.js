const { Model, DataTypes} = require('sequelize');
const sequelize = require('../conexionbd');

class RolModel extends Model {};

RolModel.init({
id_rol: {
    type: DataTypes.INTEGER(5),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
},
tipo_rol: {
    type: DataTypes.STRING(30),
    allowNull: false
}

},{
    sequelize,
    modelName: 'rol',
    timestamps:false,
    freezeTableName: true
});


module.exports = RolModel