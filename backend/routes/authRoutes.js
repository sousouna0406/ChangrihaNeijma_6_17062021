const { Router } = require("express");
const { signup, login } = require("../controllers/authControllers");
const authParams = require("../middlewares/authParams");

const router = Router();
// Route pour l'inscription d'un user
router.post("/signup", authParams, signup);
// Route pour l'autentification d'un user
router.post("/login", authParams, login);

module.exports = router;
