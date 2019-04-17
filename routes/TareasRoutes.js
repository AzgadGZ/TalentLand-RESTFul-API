// Importamos express
const express = require('express');

// Importamos el controlador para la ruta
const TareasController = require('../controllers/TareasController');

// Obtenemos una instance de Express Router (Express 4+)
const router = express.Router();

// Configuración de ruta /api/agregarTarea, metodo POST
router.post('/api/agregarTarea', TareasController.POST_NuevaTarea);

// Configuración de ruta /api/obtenerTareas, metodo GET
router.get('/api/obtenerTareas', TareasController.GET_Tareas);

// Configuración de ruta /api/obtenerTareaPorId, metodo GET
router.get('/api/obtenerTareaPorId', TareasController.GET_TareaPorId);

// Configuración de ruta /api/borrarTarea, metodo DELETE
router.delete('/api/borrarTarea', TareasController.DELETE_Tarea);

// Configuración de ruta /api/actualizarTarea, metodo PUT
router.put('/api/actualizarTarea', TareasController.UPDATE_Tarea);

// Exportamos el router con su rutaje
module.exports = router;