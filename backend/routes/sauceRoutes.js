const { Router } = require("express");
const router = Router();
const { getAllSauces, getSauce1 } = require("../controllers/sauceControllers");

router.get("/", getAllSauces);
router.get("/sauce1", getSauce1);

module.exports = router;
