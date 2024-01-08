const { Model, DataTypes} = require('sequelize');
const sequelize = require('../conexionbd');

class TipoDocumentoModel extends Model {};

TipoDocumentoModel.init({
id_tipo_doc: {
    type: DataTypes.INTEGER(10),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
},
tipo: {
    type: DataTypes.STRING(30),
    allowNull: false
}

},{
    sequelize,
    modelName: 'tipo_documento',
    timestamps:false,
    freezeTableName: true
});


module.exports = TipoDocumentoModel