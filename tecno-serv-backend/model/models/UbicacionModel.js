const { Model, DataTypes} = require('sequelize');
const sequelize = require('../conexionbd');

class UbicacionModel extends Model {};

UbicacionModel.init({
id_ubicacion: {
    type: DataTypes.INTEGER(5),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
},
lugar: {
    type: DataTypes.STRING(50),
    allowNull: false
}

},{
    sequelize,
    modelName: 'ubicacion',
    timestamps:false,
    freezeTableName: true
});


module.exports = UbicacionModel