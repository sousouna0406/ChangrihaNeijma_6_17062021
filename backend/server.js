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

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/sauces", sauceRouting);
app.use("/api/auth", authRouting);
console.log(process.env);
app.listen(process.env.PORT || 3000);
