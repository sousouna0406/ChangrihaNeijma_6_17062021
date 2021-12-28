const modelSauceSchema = require("../models/modelSauce");
const fs = require("fs");
const { log } = require("console");

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
  const sauceObject = JSON.parse(req.body.modelSauceSchema);
  delete sauceObject._id;
  const sauceSchema = new modelSauceSchema({
    ...sauceObject,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  sauceSchema
    .save()
    .then(() => res.status(201).json({ message: "Sauce enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.updateOneSauce = (req, res) => {
  // Faire un findOne comme sur le delete
  //puis garder le nom de lancienne image dans une variable
  modelSauceSchema
    .findOne({ _id: req.params.id })
    .then((sauce) => {
      console.log(sauce);
      //si je n'ai pas trouvée de sauce je renvoie une 404
      if (!sauce) {
        return res.satus(404).send("sauce non trouvée");
      }
      const oldImg = sauce.imageUrl;
      let sauceToUpdate;
      if (req.file) {
        sauceToUpdate = {
          ...req.body,
          imageUrl: `${req.protocol}://${req.get("host")}/images/${
            req.file.filename
          }`,
        };
      } else {
        sauceToUpdate = { ...req.body };
      }

      modelSauceSchema
        .updateOne(
          { _id: req.params.id },
          { ...sauceToUpdate, _id: req.params.id }
        )
        .then(() => {
          if (req.file) {
            //suppression de lancienne image : le nom de lancien image est stocké dans la variable oldImg
          }
          res.status(200).json({ message: "Update sauce !" });
        })
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteOneSauce = (req, res) => {
  // avant de faire deleteOne faire un findOne
  modelSauceSchema
    .findOne({ _id: req.params.id })
    .then((sauce) => {
      console.log(sauce);
      //si je n'ai pas trouvée de sauce je renvoie une 404
      if (!sauce) {
        return res.satus(404).send("sauce non trouvée");
      }
      const filename = modelSauceSchema.imageUrl.split("/images/")[1];
      fs.unlink(`images/"${filename}`, () => {
        modelSauceSchema
          .deleteOne({ _id: req.params.id })
          .then(() => {
            // avant le res supprimer le fichier de la photo
            res.status(200).json({ message: "Sauce supprimé !" });
          })
          .catch((error) => res.status(400).json({ error }));
      });
    })
    //suppression de la sauce
    .catch((error) => res.status(500).json({ error }));
};

exports.createOneLike = (req, res) => {
  const sauceSchema = new modelSauceSchema({
    ...req.body,
  });
  sauceSchema
    .save({ _id: req.params.id })
    .then(() => res.status(201).json({ message: "Sauce enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};
