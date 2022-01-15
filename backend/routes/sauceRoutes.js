const { Router } = require("express");
const router = Router();
const auth = require("../middlewares/token");
const multer = require("../middlewares/multerConfig");
const {
  getAllSauces,
  getOneSauce,
  createOneLike,
  createSauce,
  updateOneSauce,
  deleteOneSauce,
} = require("../controllers/sauceControllers");

// Route pour recupérer toutes les sauces
router.get("/", auth, getAllSauces);
// Route pour recupérer une sauce
router.get("/:id", auth, getOneSauce);
// Route pour la création d'une sauce
router.post("/", auth, multer, createSauce);
// Route pour la modification d'une sauce
router.put("/:id", auth, multer, updateOneSauce);
// Route pour la suppression d'une sauce
router.delete("/:id", auth, deleteOneSauce);
// Route pour les likes et les dislikes
router.post("/:id/like", auth, createOneLike);

module.exports = router;
