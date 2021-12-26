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

router.get("/", auth, getAllSauces);
router.get("/:id", auth, getOneSauce);
router.post("/", auth, multer, createSauce);
router.put("/:id", multer, auth, updateOneSauce);
router.delete("/:id", auth, deleteOneSauce);
router.post("/:id/like", auth, createOneLike);

module.exports = router;
