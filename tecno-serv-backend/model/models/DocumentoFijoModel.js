const { Model, DataTypes} = require('sequelize');
const sequelize = require('../conexionbd');

class DocumentoFijoModel extends Model {};

DocumentoFijoModel.init({
id_documento: {
    type: DataTypes.INTEGER(20),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
},
ruta_documento: {
    type: DataTypes.STRING(100),
    allowNull: false
},
id_tipo_doc:{
    type: DataTypes.INTEGER(10),
    allowNull: false
}

},{
    sequelize,
    modelName: 'documento_fijo',
    timestamps:false,
    freezeTableName: true
});


module.exports = DocumentoFijoModel