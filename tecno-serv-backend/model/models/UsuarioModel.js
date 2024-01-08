const { Model, DataTypes} = require('sequelize');
const sequelize = require('../conexionbd');

class UsuarioModel extends Model {};

UsuarioModel.init({
doc_identidad: {
    type: DataTypes.STRING(25),
    primaryKey: true,
    allowNull: false
},
nombre: {
    type: DataTypes.STRING(80),
    allowNull: false
},
correo: {
    type: DataTypes.STRING(150),
    allowNull: false
},
rol_fk:{
    type: DataTypes.INTEGER(5),
    allowNull: false
},
area_fk:{
    type: DataTypes.INTEGER(5),
    allowNull: false
},
ubicacion_fk:{
    type: DataTypes.INTEGER(5),
    allowNull: false
},
estado_usuario:{
    type: DataTypes.BOOLEAN
}

},{
    sequelize,
    modelName: 'usuario',
    timestamps:true,
    freezeTableName: true
});


module.exports = UsuarioModel