/*
*  Declarando dependencias necesarias
*/
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');

/*
*  Creando variables con las rutas de la API
*/
const listaRouter = require('./routes/ListasRoutes');
const tareasRouter = require('./routes/TareasRoutes');

// Inicializando el modulo de expressJS
const app = express();

// Configurando Logger (Dev Purposes)
app.use(logger('dev'));

/*
*  Función middleware (lógica de intercambio de información),
*  que convierte el payload de una petición entrante en JSON.
*/
app.use(express.json());

/*
*  Función que habilita CORS (Cross-Origin Resource Sharing) en la API
*/
app.use(cors());

// Añadiendo rutas a express
app.use(listaRouter);
app.use(tareasRouter);

//Exportamos la variable app (que contiene toda la información previa)
module.exports = app;
