let express = require('express')
//import body parser
let bodyParser = require('body-parser');
//import mongoose
let mongoose = require('mongoose');
let app = express();

//Import routes
let apiRoutes = require("./regRoutes")

//configurar bodyparser para processar pedidos
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//Ligar à BD
const dbPath = 'mongodb://localhost/regApp';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);

mongo.then(() => {
    console.log('Ligado à BD');
}, error => {
    console.log(error, 'erro');
});
var db=mongoose.connection;

//Verificar Ligação
if (!db)
    console.log("Erro a conectar db");
else
    console.log("DB Conectada com Sucesso");

// Porto Servidor
var port = process.env.PORT || 8080;


//Usar API routes na app
app.use('/api', apiRoutes)

// Iniciar Servidor
app.listen(port, function() {
    console.log("Servidor UP no porto: "+ port);
});