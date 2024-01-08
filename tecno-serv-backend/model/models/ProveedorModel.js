const { Model, DataTypes} = require('sequelize');
const sequelize = require('../conexionbd');

class ProveedorModel extends Model {};

ProveedorModel.init({
identificacion_prov: {
    type: DataTypes.STRING(15),
    primaryKey: true,
    allowNull: false
},
nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
},
desc_provee: {
    type: DataTypes.STRING(100),
    allowNull: false
},
numero_contacto: {
    type: DataTypes.STRING(20),
    allowNull: false
},
email_contacto: {
    type: DataTypes.STRING(150),
    allowNull: false
}

},{
    sequelize,
    modelName: 'proveedores',
    timestamps: true,
    freezeTableName: true
});


module.exports = ProveedorModel