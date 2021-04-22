const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  created: { type: Date, default: Date.now },
  articles: [String],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
