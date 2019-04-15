const mongoose = require('mongoose');

const tareasSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true,
		default: Date.now
	}, 
	description: {
		type: String,
		required: true,
	},
	dueDate: {
		type: Date,
		required: true
	},
	assignedTo: {
		type: String,
		required: false
	},
	finished: {
		type: Boolean,
		default: false
	},
	listId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	}
});

module.exports = mongoose.model('Tareas', tareasSchema);