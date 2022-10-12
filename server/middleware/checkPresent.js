const UserModel = require("../model/user.model");

const CheckUserPresent = async (req, res, next) => {
  const { username } = req.params;
  
  const check = await UserModel.findOne({ username });

  if (check !== null) {
    res.status(200).send(check);
  }
  next();
};

module.exports = CheckUserPresent;
