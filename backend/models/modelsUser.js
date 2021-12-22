const mongoose = require("mongoose");

const modelUserSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.Model("User", modelUserSchema);
