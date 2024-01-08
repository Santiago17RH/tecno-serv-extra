const { Model, DataTypes} = require('sequelize');
const sequelize = require('../conexionbd');

class MarcaModel extends Model {};

MarcaModel.init({
id_marca: {
    type: DataTypes.INTEGER(5),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
},
marca: {
    type: DataTypes.STRING(30),
    allowNull: false
}

},{
    sequelize,
    modelName: 'marca',
    timestamps:false,
    freezeTableName: true
});


module.exports = MarcaModel