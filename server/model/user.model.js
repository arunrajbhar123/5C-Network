const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: { type: String },
  location: { type: String },
  blog: { type: String },
  bio: { type: String },
  public_repos: { type: String },
  public_gists: { type: String },
  following: { type: String },
  followers: { type: String },
  created_at: { type: String },
  friends: { type: [] },
});
const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
