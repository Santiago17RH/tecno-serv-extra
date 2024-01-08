const AreaModel = require("./models/AreaModel")
const CredencialModel = require("./models/CredencialModel")
const DocumentoFijoModel = require("./models/DocumentoFijoModel")
const EquipoModel = require("./models/EquipoModel")
const EstadoModel = require("./models/EstadoModel")
const FirmaModel = require("./models/FirmaModel")
const HistorialMovModel = require("./models/HistorialMovModel")
const MarcaModel = require("./models/MarcaModel")
const ProveedorModel = require("./models/ProveedorModel")
const RolModel = require("./models/RolModel")
const TipoDocumentoModel = require("./models/TipoDocumentoModel")
const TipoEquipoModel = require("./models/TipoEquipoModel")
const UbicacionModel = require("./models/UbicacionModel")
const UsuarioModel = require("./models/UsuarioModel") 


//1:1
UsuarioModel.hasOne(CredencialModel, {foreignKey:"doc_identidad"})
CredencialModel.belongsTo(UsuarioModel, {foreignKey:"doc_identidad"})


//1:M 
RolModel.hasMany(UsuarioModel, {foreignKey:"rol_fk", as:"usuario"})
UsuarioModel.belongsTo(RolModel, {foreignKey:"rol_fk"})



AreaModel.hasMany(UsuarioModel, {foreignKey:"area_fk", as:"usuario"})
UsuarioModel.belongsTo(AreaModel, {foreignKey:"area_fk"})



UbicacionModel.hasMany(UsuarioModel, {foreignKey:"ubicacion_fk", as:"usuario"})
UsuarioModel.belongsTo(UbicacionModel, {foreignKey:"ubicacion_fk"})



UsuarioModel.hasOne(FirmaModel, {foreignKey:"doc_identidad", as:"firma"})
FirmaModel.belongsTo(UsuarioModel, {foreignKey:"doc_identidad"})



UsuarioModel.hasMany(HistorialMovModel, {foreignKey:"doc_identidad", as:"usuario"})
HistorialMovModel.belongsTo(UsuarioModel, {foreignKey:"doc_identidad"})



ProveedorModel.hasMany(EquipoModel, {foreignKey:"identificacion_prov", as:"equipo"})
EquipoModel.belongsTo(ProveedorModel, {foreignKey:"identificacion_prov"})



EquipoModel.hasMany(HistorialMovModel, {foreignKey:"id_equipo", as:"historial"})
HistorialMovModel.belongsTo(EquipoModel, {foreignKey:"id_equipo"})

/* 

EquipoModel.hasMany(ActaModel, {foreignKey:"id_equipo", as:"acta"})
ActaModel.belongsTo(EquipoModel, {foreignKey:"id_equipo"})
 */


// Como es muchos a muchos, ¿tambien es hasMany?


// preguntar si aca va equipo en lo de "as", y tambien arriba con los usuarios
MarcaModel.hasMany(EquipoModel, {foreignKey:"marca_fk", as:"equipo"})
EquipoModel.belongsTo(MarcaModel, {foreignKey:"marca_fk"})



TipoEquipoModel.hasMany(EquipoModel, {foreignKey:"tipo_equipo_fk", as:"equipo"})
EquipoModel.belongsTo(TipoEquipoModel, {foreignKey:"tipo_equipo_fk"})



EstadoModel.hasMany(EquipoModel, {foreignKey:"estado_fk", as:"equipo"})
EquipoModel.belongsTo(EstadoModel, {foreignKey:"estado_fk"})



EquipoModel.hasOne(DocumentoFijoModel, {foreignKey:"id_equipo", as:"equipo"})
DocumentoFijoModel.belongsTo(EquipoModel, {foreignKey:"id_equipo"})



TipoDocumentoModel.hasOne(DocumentoFijoModel, {foreignKey:"id_tipo_doc", as:"Tipo"})
DocumentoFijoModel.belongsTo(TipoDocumentoModel, {foreignKey:"id_tipo_doc"})