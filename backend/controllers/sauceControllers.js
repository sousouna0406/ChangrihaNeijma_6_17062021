exports.getAllSauces = (req, res) => {
  res.json(["sauce1", "sauce2"]);
};

exports.getSauce1 = (req, res) => {
  res.json({
    value: "sauce1",
  });
};
