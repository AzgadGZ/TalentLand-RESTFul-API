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
    await Tarea.findByIdAndRemove(req.body._id);
    res.json(req.body);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.UPDATE_Tarea = async (req, res) => {
  try {
    const tareaActualizada = {
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      dueDate: req.body.dueDate,
      assignedTo: req.body.assignedTo,
      listId: req.body.listId,
      finished: req.body.finished,
    };
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
