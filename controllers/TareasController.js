// Importa el Schema de Mongoose
const Tarea = require("../models/Tarea");

// Exporta la función POST_NuevaTarea
exports.POST_NuevaTarea = async (req, res) => {
  try {
    /*
		*  Con el request que recibe, crea un nuevo objeto (nuevaTarea)
		*  usando el constructor del Schema "Tarea"
		*/
    const tareaNueva = new Tarea({
      title: req.body.title,
      description: req.body.description,
      dueDate: req.body.dueDate,
      assignedTo: req.body.assignedTo,
      listId: req.body.listId
    });

    /*
		*  Guarda en "tareaCreada" el resultado de tareaNueva.save()
		*  el cual usa Mongoose para guardar el registro, así mismo 
		*  al estar implicitamente envuelto en una promesa, es candidato
		*  a usar then/catch o async/await para esperar a que la operación
		*  termine y no pasar de largo
		*/
    const tareaCreada = await tareaNueva.save();

    // Convierte a JSON el objecto y lo devuelve como respuesta
    res.json(tareaCreada);
  } catch (error) {
    // Si hay algo malo dentro del proceso, retorna un error 400 y el error.
    res.status(400).send(error);
  }
};

// Exporta la función GET_Tareas
exports.GET_Tareas = async (req, res) => {
  try {
    /*
		*  Guarda en "tareas" el resultado de Tarea.find();
		*  el cual usa Mongoose para obtener todos los resultados
		*  de la colección basado en el Schema. 
		*/
    const tareas = await Tarea.find({ listId: req.query.id });

    // Convierte a JSON el objecto y lo devuelve como respuesta
    res.json(tareas);
  } catch (error) {
    // Si hay algo malo dentro del proceso, retorna un error 400 y el error.
    res.status(400).send(error);
  }
};

// Exporta la función GET_TareaPorId
exports.GET_TareaPorId = async (req, res) => {
  try {
    /*
		*  Guarda en "tareaPorId" el resultado de Tarea.findById(:id);
		*  el cual usa Mongoose para obtener una tarea basado en el
		*  request.id que se traduce en un ObjectId. 
    */    
    const tareaPorId = await Tarea.findById(req.query.id);

    // Convierte a JSON el objecto y lo devuelve como respuesta
    res.json(tareaPorId);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Exporta la función DELETE_Tarea
exports.DELETE_Tarea = async (req, res) => {
  try {
    /*
		*  Mediante el request del body se manda a llamarTarea.findByIdAndRemove(:id);
		*  el cual usa Mongoose para obtener una tarea basado en el
		*  request.id que se traduce en un ObjectId y borrarla. 
		*/
    await Tarea.findByIdAndRemove(req.body._id);

    // Convierte a JSON el objecto y lo devuelve como respuesta
    res.json(req.body);
  } catch (error) {
		// Si hay algo malo dentro del proceso, retorna un error 400 y el error.
    res.status(400).send(error);
  }
};

// Exporta la función UPDATE_Tarea
exports.UPDATE_Tarea = async (req, res) => {
  try {
    /*
		*  Se crea un objeto "tareaActualizada" usando el Schema de mongoose, y se le asigna
		*  los datos del objeto que trae el request
		*/
    const tareaActualizada = {
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      dueDate: req.body.dueDate,
      assignedTo: req.body.assignedTo,
      listId: req.body.listId,
      finished: req.body.finished,
    };

    /*
		*  Guarda en "tareaActualizadaResultado" el resultado de Tarea.findByIdAndUpdate(:id, ObjectoTarea, NuevaSioNel?);
		*  el cual usa Mongoose para obtener una tarea basado en el request.id que se traduce en un ObjectId, como
		*  segundo parametro se pasa el objeto con las actualizaciones y como tercer parametro que pasa si el objeto no
		*  existe en la colección, si es "true", se crea en dado caso.		
		*/
    const tareaActualizadaResultado = await Tarea.findByIdAndUpdate(
      req.query.id,
      tareaActualizada,
      { new: true }
    );

    // Convierte a JSON el objecto y lo devuelve como respuesta
    res.json(tareaActualizadaResultado);
  } catch (error) {
    // Si hay algo malo dentro del proceso, retorna un error 400 y el error.
    res.status(400).send(error);
  }
};
