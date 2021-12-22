const modelUserSchema = require("../models/modelsUser");

exports.signup = (req, res) => {
  const userSchema = new modelUserSchema({
    ...req.body,
  });
  userSchema
    .save()
    .then(() => res.status(201).json({ message: "Object enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
  // res.json({
  //   email: "string",
  //   password: "string",
  // });
};

exports.login = (req, res) => {
  const userSchema = new modelUserSchema({
    ...req.body,
  });
  userSchema
    .save()
    .then(() => res.status(201).json({ message: "Object enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
  // res.json({
  //   email: "string",
  //   password: "string",
  // });
};
