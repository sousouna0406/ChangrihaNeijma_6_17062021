const { Router } = require("express");
const router = Router();

const modelSauceSchema = require("../models/modelSauce");
const {
  getAllSauces,
  getOneSauce,
  createOneLike,
  createSauce,
  updateOneSauce,
  deleteOneSauce,
} = require("../controllers/sauceControllers");

router.get("/", getAllSauces, (req, res, next) => {
  modelSauceSchema
    .find()
    .then((modelSauceSchema) => res.status(200).json(modelSauceSchema))
    .catch((error) => res.status(400).json({ error }));
});
router.get("/:id", getOneSauce);
router.post("/", createSauce, (req, res, next) => {
  const sauceSchema = new modelSauceSchema({
    ...req.body,
  });
  sauceSchema
    .save()
    .then(() => res.status(201).json({ message: "Object enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
});
router.put("/:id", updateOneSauce);
router.delete("/:id", deleteOneSauce);
router.post("/:id/like", createOneLike);

module.exports = router;
