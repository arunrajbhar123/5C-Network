const UserModel = require("../model/user.model");
const SortData = async (req, res, next) => {
  const { sortby } = req.query;
  const data = await UserModel.find({}, { sortby: 1 });
  console.log(data);
  res.send("hi");
};
module.exports = SortData;
