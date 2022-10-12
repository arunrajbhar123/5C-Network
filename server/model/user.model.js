const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: { type: String },
  score: { type: Number },
  level: { type: String },
});
const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
