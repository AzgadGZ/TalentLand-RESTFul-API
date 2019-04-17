// Importamos moongoose para el mapeo (Moongose es un ODM)
const mongoose = require('mongoose');

// Creamos un Schema con Mongoose (OJO: MongoDB es Schemaless)
const tareasSchema = new mongoose.Schema({
	// Creamos un campo llamado "title" de tipo "string" y que sea requerido.
	title: {
		type: String,
		required: true
	},
	  /* 
    *  Creamos un campo llamado "date" de tipo "Date" y que por defecto
    *  use la fecha del momento de su creación
    */
	date: {
		type: Date,
		required: true,
		default: Date.now
	},
	// Creamos un campo llamado "description" de tipo "string" y que sea requerido.
	description: {
		type: String,
		required: true,
	},
	// Creamos un campo llamado "dueDate" de tipo "Date" y que sea requerido.
	dueDate: {
		type: Date,
		required: true
	},
	// Creamos un campo llamado "assignedTo" de tipo "string" y que NO sea requerido.
	assignedTo: {
		type: String,
		required: false
	},
    /* 
    *  Creamos un campo llamado "finished" de tipo "Boolean" y que por defecto
    *  sea "false"
    */
	finished: {
		type: Boolean,
		default: false
	},
	/*
	*  Creamos un campo llamado "listId" de tipo "ObjectId" (Tipo asignado desde Mongoose) 
	*  y que sea requerido.
	*/
	listId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	}
});
// Exportamos el Schema de Mongoose, y le damos el nombre de la colección "Tareas"
module.exports = mongoose.model('Tareas', tareasSchema);