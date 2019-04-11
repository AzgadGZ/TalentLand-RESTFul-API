const mongoose = require('mongoose');

const listaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    iconName: {
        type: String,
        required: true,
        default: "folder"
    }
});

module.exports = mongoose.model('Listas', listaSchema);
