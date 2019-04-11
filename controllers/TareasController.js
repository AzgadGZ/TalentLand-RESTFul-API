const Tarea = require("../models/Tarea");

exports.POST_NuevaTarea = async (req, res) => {
  try {
    const tareaNueva = new Tarea({
      title: req.body.title,
      description: req.body.description,
      dueDate: req.body.dueDate,
      assignedTo: req.body.assignedTo,
      listId: req.body.listId
    });

    const tareaCreada = await tareaNueva.save();
    res.json(tareaCreada);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.GET_Tareas = async (req, res) => {
  try {
    const tareas = await Tarea.find({ listId: req.query.id });
    res.json(tareas);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.GET_TareaPorId = async (req, res) => {
  try {
    const tareaPorId = await Tarea.findById(req.query.id);
    res.json(tareaPorId);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.DELETE_Tarea = async (req, res) => {
  try {
    const tareaBorrada = await Tarea.findByIdAndRemove(req.body.id);
    res.json(tareaBorrada);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.UPDATE_Tarea = async (req, res) => {
  try {
    const tareaActualizada = new Tarea({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      dueDate: req.body.dueDate,
      assignedTo: req.body.assignedTo,
      listId: req.body.listId
    });

    const tareaActualizadaResultado = await Tarea.findByIdAndUpdate(
      req.query.id,
      tareaActualizada,
      { new: true }
    );
    res.json(tareaActualizadaResultado);
  } catch (error) {
    res.status(400).send(error);
  }
};
