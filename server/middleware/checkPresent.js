const UserModel = require("../model/user.model");

const CheckUserPresent = async (req, res, next) => {
  const { username } = req.params;

  const check = await UserModel.findOne({ username }, { __v: 0, _id: 0 });

  if (check !== null) {
    return res.status(200).send(check);
  }
  next();
};

module.exports = CheckUserPresent;
