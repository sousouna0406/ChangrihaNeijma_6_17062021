const modelSauceSchema = require("../models/modelSauce");
const fs = require("fs");

exports.getAllSauces = (req, res) => {
  modelSauceSchema
    .find()
    .then((sauce) => res.status(200).json(sauce))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneSauce = (req, res) => {
  modelSauceSchema
    .findOne({ _id: req.params.id })
    .then((sauce) => res.status(200).json(sauce))
    .catch((error) => res.status(400).json({ error }));
};

exports.createSauce = (req, res) => {
  //const sauceObject = req.body.modelSauceSchema;
  const sauceSchema = new modelSauceSchema({
    ...JSON.parse(req.body.sauce),
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
      //si je n'ai pas trouvée de sauce je renvoie une 404
      if (!sauce) {
        return res.status(404).send("sauce non trouvée");
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
            fs.unlink(`images/"${oldImg}`, () => {
              res.status(200).json({ message: "Update image  !" });
            });
          } else {
            res.status(200).json({ message: "Update sauce !" });
          }
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
      //si je n'ai pas trouvée de sauce je renvoie une 404
      if (!sauce) {
        return res.status(404).send("sauce non trouvée");
      }
      const filename = sauce.imageUrl.split("/images/")[1];

      modelSauceSchema
        .deleteOne({ _id: req.params.id })
        .then(() => {
          // avant le res supprimer le fichier de la photo
          fs.unlink(`images/"${filename}`, () => {
            res.status(200).json({ message: "Sauce image supprimé !" });
          });
          res.status(200).json({ message: "Sauce supprimé !" });
        })
        .catch((error) => res.status(400).json({ error }));
    })
    //suppression de la sauce
    .catch((error) => res.status(500).json({ error }));
};

exports.createOneLike = (req, res) => {
  let sauce = req.params.id;
  let like = Number(req.body.like);
  let userId = req.body.userId;

  switch (like) {
    case 1:
      modelSauceSchema
        .updateOne(
          { _id: sauce },
          { $push: { usersLiked: userId }, $inc: { likes: 1 } }
        )
        .then(() => res.status(200).json({ message: "avis positif" }))
        .catch((error) => res.status(400).json({ error: "non trouvé" }));

      break;
    case -1:
      modelSauceSchema
        .updateOne(
          { _id: sauce },
          { $push: { usersDisliked: userId }, $inc: { dislikes: 1 } }
        )
        .then(() => res.status(200).json({ message: "avis negatif" }))
        .catch((error) => res.status(400).json({ error: "non trouvé" }));

      break;
    case 0:
      modelSauceSchema
        .findOne({ _id: sauce })
        .then((sauce1) => {
          if (sauce1.usersLiked.includes(userId)) {
            modelSauceSchema
              .updateOne(
                { _id: sauce },
                { $pull: { usersLiked: userId }, $inc: { likes: -1 } }
              )
              .then(() => res.status(200).json({ message: "avis annulé" }))
              .catch((error) => res.status(400).json({ error: "non trouvé" }));
          }
          if (sauce1.usersDisliked.includes(userId)) {
            modelSauceSchema
              .updateOne(
                { _id: sauce },
                {
                  $pull: { usersDisliked: userId },
                  $inc: { dislikes: -1 },
                }
              )
              .then(() => res.status(200).json({ message: "avis annulé" }))
              .catch((error) => res.status(400).json({ error: "non trouvé" }));
          }
        })
        .catch((error) => res.status(404).json({ error: "non trouvé" }));
      break;
    default:
      console.log("error");
  }
};
