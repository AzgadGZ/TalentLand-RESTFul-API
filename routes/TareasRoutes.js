const express = require('express');
const TareasController = require('../controllers/TareasController');
const router = express.Router();

router.post('/api/agregarTarea', TareasController.POST_NuevaTarea);
router.get('/api/obtenerTareas', TareasController.GET_Tareas);
router.get('/api/obtenerTareaPorId', TareasController.GET_TareaPorId);
router.delete('/api/borrarTarea', TareasController.DELETE_Tarea);
router.put('/api/actualizarTarea', TareasController.UPDATE_Tarea);

module.exports = router;