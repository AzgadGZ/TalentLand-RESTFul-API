const express = require('express');
const ListasController = require('../controllers/ListasController');
const router = express.Router();

router.post('/api/agregarLista', ListasController.POST_NuevaLista);
router.get('/api/obtenerListas', ListasController.GET_Listas);
router.get('/api/obtenerListaPorId', ListasController.GET_ListaPorId);
router.delete('/api/borrarLista', ListasController.DELETE_Lista);
router.put('/api/actualizarLista', ListasController.UPDATE_Lista);

module.exports = router;

