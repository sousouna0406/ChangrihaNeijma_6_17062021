const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const sauceRouting = require("./routes/sauceRoutes");
const authRouting = require("./routes/authRoutes");

require("./models/dbConfig");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/sauces", sauceRouting);
app.use("/api/auth", authRouting);

app.listen(process.env.PORT || 3000);
