// importation des biblio
const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose');



// Creation d'un serveur express
const app = express();
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:n27017/employeeapp', {useNewUrlParser: true});


// Importation des routes
const employeeRoutes = require('../backend/Routes/EmployeeRoute');

// Convertion sous format JSON
app.use(bodyParser.json());

// Activation CORS pour comprendre les requettes
app.use(cors());

// Port number
const port = process.env.PORT || 4000;

// Configuration des routes
app.use('/employees', employeeRoutes);

// Lancement d'un serveur express
const server = app.listen(port, function () {
console.log('Server Lisening On Port : ' + port);
});