const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: { type: String },
  location: { type: String },
  blog: { type: String },
  bio: { type: String },
  public_repos: { type: Number },
  public_gists: { type: Number },
  following: { type: Number },
  followers: { type: Number },
  created_at: { type: String },
  friends: { type: [] },
});
const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
