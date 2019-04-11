const Lista = require("../models/Lista");

exports.POST_NuevaLista = async (req, res) => {
  try {
    const nuevaLista = new Lista({
      name: req.body.name,
      iconName: req.body.iconName
    });

    const listaCreada = await nuevaLista.save();
    res.json(listaCreada);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.GET_Listas = async (req, res) => {
	try {
		const listas = await Lista.find();
		res.json(listas);
	} catch (error) {
		res.status(400).send(error);
	}
};

exports.GET_ListaPorId = async (req, res) => {
	try {
		const listaPorId = await Lista.findById(req.query.id);
		res.json(listaPorId);
	} catch (error) {
		res.status(400).send(error);
	}
};

exports.DELETE_Lista = async (req, res) => {
	try {
		const listaBorrada = await Lista.findByIdAndRemove(req.body.id);
		res.json(listaBorrada);
	} catch (error) {
		res.status(400).send(error);
	}
};

exports.UPDATE_Lista = async (req, res) => {
	try {
		const listaActualizada = new Lista({
			title: req.body.title,
			description: req.body.description,
			date: req.body.date,
			dueDate: req.body.dueDate,
			assignedTo: req.body.assignedTo,
			listId: req.body.listId
		});
		
		const listaActualizadaResultado = await Lista.findByIdAndUpdate(req.query.id, listaActualizada, {new: true});
		res.json(listaActualizadaResultado)
	} catch(error) {
		res.status(400).send(error);
	}
};
