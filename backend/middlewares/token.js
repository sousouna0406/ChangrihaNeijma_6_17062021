const jwt = require("jsonwebtoken");
// Middleware pour la création d'un token
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw "UserId invalide !";
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({
      error: error,
    });
  }
};
