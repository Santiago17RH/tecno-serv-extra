const { Model, DataTypes} = require('sequelize');
const sequelize = require('../conexionbd');

class EquipoModel extends Model {};

EquipoModel.init({
id_equipo: {
    type: DataTypes.INTEGER(5),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
},
/* id_documento: {
    type: DataTypes.INTEGER(20),
    allowNull: false
}, */
identificacion_prov: {
    type: DataTypes.STRING(15),
    allowNull: false
},
placa_numero_serie: {
    type: DataTypes.INTEGER(30),
    allowNull: false
},
marca_fk:{
    type: DataTypes.INTEGER(5),
    allowNull: false
},
tipo_equipo_fk:{
    type: DataTypes.INTEGER(5),
    allowNull: false
},
contingencia:{
    type: DataTypes.BOOLEAN
},
procesador:{
    type: DataTypes.STRING(30),
    allowNull: false
},
descripcion:{
    type: DataTypes.STRING(500),
    allowNull: false
},
sistema_operativo:{
    type: DataTypes.STRING(30),
    allowNull: false
},
ram:{
    type: DataTypes.STRING(20),
    allowNull: false
},
almacenamiento:{
    type: DataTypes.STRING(20),
    allowNull: false
},
estado_fk:{
    type: DataTypes.INTEGER(5),
    allowNull: false
}

},{
    sequelize,
    modelName: 'equipo_computo',
    timestamps:true,
    freezeTableName: true
});


module.exports = EquipoModel