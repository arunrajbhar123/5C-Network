const UserModel = require("../model/user.model");
const FindFriends = async (req, res, next) => {
  const data = req.body;

  const saveData = new UserModel(data);
  await saveData.save();
  next();
};
module.exports = FindFriends;
