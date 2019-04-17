// Importamos express
const express = require('express');

// Importamos el controlador para la ruta
const ListasController = require('../controllers/ListasController');

// Obtenemos una instance de Express Router (Express 4+)
const router = express.Router();

// Configuración de ruta /api/agregarLista, metodo POST
router.post('/api/agregarLista', ListasController.POST_NuevaLista);

// Configuración de ruta /api/obtenerListas, metodo GET
router.get('/api/obtenerListas', ListasController.GET_Listas);

// Configuración de ruta /api/obtenerListaPorId, metodo GET
router.get('/api/obtenerListaPorId', ListasController.GET_ListaPorId);

// Configuración de ruta /api/borrarLista, metodo DELETE
router.delete('/api/borrarLista', ListasController.DELETE_Lista);

// Configuración de ruta /api/actualizarLista, metodo PUT
router.put('/api/actualizarLista', ListasController.UPDATE_Lista);

// Exportamos el router con su rutaje
module.exports = router;

