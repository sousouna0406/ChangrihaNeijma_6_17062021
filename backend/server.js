const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const sauceRouting = require("./routes/sauceRoutes");
const authRouting = require("./routes/authRoutes");

dotenv.config({
  path: "config/.env",
});
require("./models/dbConfig");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// route pour placer les images dans le dossier images
app.use("/images", express.static(path.join(__dirname, "images")));
// route pour les sauces
app.use("/api/sauces", sauceRouting);
// route pour les authentifications
app.use("/api/auth", authRouting);

app.listen(process.env.PORT || 3000);
