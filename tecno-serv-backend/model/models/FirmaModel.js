const { Model, DataTypes} = require('sequelize');
const sequelize = require('../conexionbd');

class FirmaModel extends Model {};

FirmaModel.init({
doc_identidad: {
    type: DataTypes.STRING(25),
    primaryKey: true,
    allowNull: false
},
img: {
    type: DataTypes.STRING(150),
    allowNull: false
}

},{
    sequelize,
    modelName: 'firma',
    timestamps:false,
    freezeTableName: true
});


module.exports = FirmaModel