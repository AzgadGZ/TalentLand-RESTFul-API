// Importa el Schema de Mongoose
const Lista = require("../models/Lista");

// Exporta la función POST_NuevaLista
exports.POST_NuevaLista = async (req, res) => {
  try {
		/*
		*  Con el request que recibe, crea un nuevo objeto (nuevaLista)
		*  usando el constructor del Schema "Lista"
		*/
    const nuevaLista = new Lista({
      name: req.body.name,
      iconName: req.body.iconName
    });

		/*
		*  Guarda en "listaCreada" el resultado de nuevaLista.save()
		*  el cual usa Mongoose para guardar el registro, así mismo 
		*  al estar implicitamente envuelto en una promesa, es candidato
		*  a usar then/catch o async/await para esperar a que la operación
		*  termine y no pasar de largo
		*/
		const listaCreada = await nuevaLista.save();
		
		// Convierte a JSON el objecto y lo devuelve como respuesta
    res.json(listaCreada);
  } catch (error) {
		// Si hay algo malo dentro del proceso, retorna un error 400 y el error.
    res.status(400).send(error);
  }
};

// Exporta la función GET_Listas
exports.GET_Listas = async (req, res) => {
	try {
		/*
		*  Guarda en "listas" el resultado de Lista.find();
		*  el cual usa Mongoose para obtener todos los resultados
		*  de la colección basado en el Schema. 
		*/
		const listas = await Lista.find();

		// Convierte a JSON el objecto y lo devuelve como respuesta
		res.json(listas);
	} catch (error) {
		// Si hay algo malo dentro del proceso, retorna un error 400 y el error.
		res.status(400).send(error);
	}
};

// Exporta la función GET_ListaPorId
exports.GET_ListaPorId = async (req, res) => {
	try {
		/*
		*  Guarda en "listaPorId" el resultado de Lista.findById(:id);
		*  el cual usa Mongoose para obtener una lista basado en el
		*  request.id que se traduce en un ObjectId. 
		*/
		const listaPorId = await Lista.findById(req.query.id);

		// Convierte a JSON el objecto y lo devuelve como respuesta
		res.json(listaPorId);
	} catch (error) {
		// Si hay algo malo dentro del proceso, retorna un error 400 y el error.
		res.status(400).send(error);
	}
};

// Exporta la función DELETE_Lista
exports.DELETE_Lista = async (req, res) => {
	try {
		/*
		*  Guarda en "listaBorrada" el resultado de Lista.findByIdAndRemove(:id);
		*  el cual usa Mongoose para obtener una lista basado en el
		*  request.id que se traduce en un ObjectId y borrarla. 
		*/
		const listaBorrada = await Lista.findByIdAndRemove(req.body.id);

		// Convierte a JSON el objecto y lo devuelve como respuesta
		res.json(listaBorrada);
	} catch (error) {
		// Si hay algo malo dentro del proceso, retorna un error 400 y el error.
		res.status(400).send(error);
	}
};

// Exporta la función UPDATE_Lista
exports.UPDATE_Lista = async (req, res) => {
	try {
		/*
		*  Se crea un objeto "listaActualizada" usando el Schema de mongoose, y se le asigna
		*  los datos del objeto que trae el request
		*/
		const listaActualizada = new Lista({
			title: req.body.title,
			description: req.body.description,
			date: req.body.date,
			dueDate: req.body.dueDate,
			assignedTo: req.body.assignedTo,
			listId: req.body.listId
		});
		
		/*
		*  Guarda en "listaActualizadaResultado" el resultado de Lista.findByIdAndUpdate(:id, ObjectoLista, NuevaSioNel?);
		*  el cual usa Mongoose para obtener una lista basado en el request.id que se traduce en un ObjectId, como
		*  segundo parametro se pasa el objeto con las actualizaciones y como tercer parametro que pasa si el objeto no
		*  existe en la colección, si es "true", se crea en dado caso.		
		*/
		const listaActualizadaResultado = await Lista.findByIdAndUpdate(req.query.id, listaActualizada, {new: true});

		// Convierte a JSON el objecto y lo devuelve como respuesta
		res.json(listaActualizadaResultado)
	} catch(error) {
		// Si hay algo malo dentro del proceso, retorna un error 400 y el error.
		res.status(400).send(error);
	}
};
