module.exports = (req, res, next) => {
  // je dois verifier le body pour savoir si lemail est bien present et si lemail est bien un email
  // REGEX
  const bodyEmail = req.body.email;
  const bodyPassword = req.body.password;
  if (bodyEmail && bodyPassword) {
    next();
  } else if (bodyEmail) {
    const emailRegex =
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(
        bodyEmail
      );
    if (emailRegex === true) {
      next();
    } else {
      return res.status(401).json({
        error: "Format Email incorrect",
      });
    }
  } else if (!bodyPassword) {
    return res.status(401).json({
      error: "Mettre un mot de passe",
    });
  } else {
    return res.status(400).json({ message: "introuvable" });
  }
};
