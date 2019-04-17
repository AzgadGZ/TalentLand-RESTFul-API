// Importamos moongoose para el mapeo (Moongose es un ODM)
const mongoose = require('mongoose');

// Creamos un Schema con Mongoose (OJO: MongoDB es Schemaless)
const listaSchema = new mongoose.Schema({
    // Creamos un campo llamado "name" de tipo "string" y que sea requerido.
    name: {
        type: String,
        required: true
    },
    /* 
    *  Creamos un campo llamado "iconName" de tipo "string" y que por defecto
    *  usa "folder" (Iconos basados en Materia.IO https://material.io/tools/icons/)
    */
    iconName: {
        type: String,
        default: "folder"
    }
});

// Exportamos el Schema de Mongoose, y le damos el nombre de la colección "Listas"
module.exports = mongoose.model('Listas', listaSchema);
