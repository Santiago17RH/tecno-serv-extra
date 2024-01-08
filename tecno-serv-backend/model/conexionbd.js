//Conexión a la base de datos
const { Sequelize } = require("sequelize");

//enviamos la informacion como parametros donde el orden es
//?Nombre de la BD
//?Usuario de la BD
//?Contraseña de la BD
//?Un objeto que contiene tanto el host de la base de datos y que dialecto tiene, en este caso mysql
const sequelize = new Sequelize(
    "tecno_serv",
    "root",
    "",
    {
    host: "localhost",
    dialect: "mysql"
    }
);

module.exports = sequelize;