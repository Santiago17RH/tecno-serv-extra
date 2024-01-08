const { Model, DataTypes} = require('sequelize');
const sequelize = require('../conexionbd');

class CredencialModel extends Model {};

CredencialModel.init({
id_credencial: {
    type: DataTypes.INTEGER(5),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
},
doc_identidad: {
    type: DataTypes.STRING(25),
    allowNull: false
},
contraseña: {
    type: DataTypes.STRING(250),
    allowNull: false
}

},{
    sequelize,
    modelName: 'credencial',
    timestamps:false,
    freezeTableName: true
});


module.exports = CredencialModel