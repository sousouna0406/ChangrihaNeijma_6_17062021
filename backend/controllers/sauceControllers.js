const modelSauceSchema = require("../models/modelSauce");

exports.getAllSauces = (req, res) => {
  const sauceSchema = new modelSauceSchema({
    ...req.body,
  });
  sauceSchema
    .save()
    .then(() => res.status(201).json({ message: "Object enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneSauce = (req, res) => {
  // res.json({
  //   id: req.params.id,
  // });
  const sauceSchema = new modelSauceSchema({
    ...req.body,
  });
  sauceSchema
    .save()
    .then(() => res.status(201).json({ message: "Object enregistré !" }))
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

  // (req, res, next) => {
  //   modelSauceSchema
  //     .find()
  //     .then((modelSauceSchema) => res.status(200).json(modelSauceSchema))
  //     .catch((error) => res.status(400).json({ error }));
  // };
};
exports.updateOneSauce = (req, res) => {
  const sauceSchema = new modelSauceSchema({
    ...req.body,
  });
  sauceSchema
    .save()
    .then(() => res.status(201).json({ message: "Object enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
  // res.json({
  //     sauce: "sucrée",
  //     Image: "file2",
  //   });
};
exports.deleteOneSauce = (req, res) => {
  const sauceSchema = new modelSauceSchema({
    ...req.body,
  });
  sauceSchema
    .save()
    .then(() => res.status(201).json({ message: "Object enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
  // res.json({
  //   sauce: "null",
  // });
};
exports.createOneLike = (req, res) => {
  const sauceSchema = new modelSauceSchema({
    ...req.body,
  });
  sauceSchema
    .save()
    .then(() => res.status(201).json({ message: "Object enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
  // res.json({
  //   id: req.params.id,
  //   like: 7,
  // });
};
