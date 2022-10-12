const UserModel = require("../model/user.model");
const DeleteData = async (req, res, next) => {
  const { username } = req.params;
  const Data = await UserModel.deleteOne({ username });

  if (Data.deletedCount == 0) {
    return res.send({ message: "data is not exist" });
  }
  next();
};

module.exports = DeleteData;
