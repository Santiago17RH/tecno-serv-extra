const express = require('express');
const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection');
const session = require('express-session');
const bodyParser = require('body-parser');
const sequelize = require('./model/conexionbd')

require('./model/relaciones')

//Archivo enrutador API V01
const routerFile = require('./router/router')

const app = express();
let puerto = 1584

app.use(bodyParser.urlencoded({
    extname: true
}));

app.use(bodyParser.json()); 


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, token');
    next();
  });
/* app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'proyecto_dib'
})); */

//Se arranca la aplicación adicional se realiza la creación y conexion a la BD
app.listen(puerto, ()=>{
    console.log(`Servidor arrancado en el puerto ${puerto}`)

    sequelize.sync( {force: false} ).then(()=>{
        console.log('Conexion a la bd exitosa');
    }).catch(error=>{
        console.log('Error por zunga: ' + error)
    });
});

app.use('/api-tecnoserv-v01', routerFile);



/* app.get('/saludo', (_req, res) => {
    res.json({
        Saludo: "Hola"
    })
});

app.get('/saludo-nombre', (req, res) => {
    const nombreUser = req.query.nombre; 

    res.json({ Saludo: "Hola " + nombreUser });
});

*/

 app.use('*', (req,res)=>{
    res.status(404).json({mensaje:"Ruta no encontrada"})
}) 