// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Voilà la réponse du serveur !");
// });

// server.listen(process.env.PORT || 3000);

const express = require("express");
const sauceRouting = require("./routes/sauceRoutes");
const authRouting = require("./routes/authRoutes");

const app = express();

app.use("/api/sauces", sauceRouting);
app.use("/api/auth", authRouting);

app.listen(process.env.PORT || 3000);
