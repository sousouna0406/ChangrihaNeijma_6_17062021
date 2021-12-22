exports.getAllSauces = (req, res) => {
  res.json(["sauce1", "sauce2"]);
};

exports.getOneSauce = (req, res) => {
  res.json({
    id: req.params.id,
  });
};
exports.createSauce = (req, res) => {
  res.json({
    sauce: "piquante",
    Image: "file",
  });
};
exports.updateOneSauce = (req, res) => {
  res.json({
    sauce: "sucrée",
    Image: "file2",
  });
};
exports.deleteOneSauce = (req, res) => {
  res.json({
    sauce: "null",
  });
};
exports.createOneLike = (req, res) => {
  res.json({
    id: req.params.id,
    like: 7,
  });
};
