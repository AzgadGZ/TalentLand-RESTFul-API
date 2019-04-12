const mongoose = require('mongoose');

const listaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    iconName: {
        type: String,
        default: "folder"
    }
});

module.exports = mongoose.model('Listas', listaSchema);
