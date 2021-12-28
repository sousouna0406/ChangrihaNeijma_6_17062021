const { Router } = require("express");
const { signup, login } = require("../controllers/authControllers");
const authParams = require("../middlewares/authParams");

const router = Router();

router.post("/signup", authParams, signup);
router.post("/login", authParams, login);

module.exports = router;
