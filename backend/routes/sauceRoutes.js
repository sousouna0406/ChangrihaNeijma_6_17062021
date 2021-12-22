const { Router } = require("express");
const router = Router();

const {
  getAllSauces,
  getOneSauce,
  createOneLike,
  createSauce,
  updateOneSauce,
  deleteOneSauce,
} = require("../controllers/sauceControllers");

router.get("/", getAllSauces);
router.get("/:id", getOneSauce);
router.post("/", createSauce);
router.put("/:id", updateOneSauce);
router.delete("/:id", deleteOneSauce);
router.post("/:id/like", createOneLike);

module.exports = router;
