const modelSauceSchema = require("../models/modelSauce");

exports.getAllSauces = (req, res) => {
  modelSauceSchema
    .find()
    .then((modelSauceSchema) => res.status(200).json(modelSauceSchema))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneSauce = (req, res) => {
  modelSauceSchema
    .find({ _id: req.params.id })
    .then((modelSauceSchema) => res.status(200).json(modelSauceSchema))
    .catch((error) => res.status(400).json({ error }));
};

exports.createSauce = (req, res) => {
  const sauceSchema = new modelSauceSchema({
    ...req.body,
  });
  sauceSchema
    .save()
    .then(() => res.status(201).json({ message: "Object enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.updateOneSauce = (req, res) => {
  modelSauceSchema
    .updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Update sauce !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteOneSauce = (req, res) => {
  modelSauceSchema
    .deleteOne({ _id: req.params.id })
    .then((modelSauceSchema) => res.status(200).json(modelSauceSchema))
    .catch((error) => res.status(400).json({ error }));
};

exports.createOneLike = (req, res) => {
  const sauceSchema = new modelSauceSchema({
    ...req.body,
  });
  sauceSchema
    .save({ _id: req.params.id })
    .then(() => res.status(201).json({ message: "Object enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};
