const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://sousouna:kaina2203@clusterpiquante.uytvg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));