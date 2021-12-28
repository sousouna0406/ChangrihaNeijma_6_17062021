module.exports = (req, res, next) => {
  const bodyEmail = req.body.email;
  const bodyPassword = req.body.password;
  const emailRegex =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(
      bodyEmail
    );

  if (!emailRegex) {
    return res.status(401).json({
      error: "Format Email incorrect",
    });
  } else if (!bodyPassword) {
    return res.status(401).json({
      error: "Mettre un mot de passe",
    });
  } else {
    next();
  }
};
