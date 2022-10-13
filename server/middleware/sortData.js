const UserModel = require("../model/user.model");
const SortData = async (req, res, next) => {
  const { sortby } = req.query;

  var data;
  if (sortby == "followers") {
    data = await UserModel.find({}, { __v: 0, _id: 0 }).sort({ followers: 1 });
  } else if (sortby == "following") {
    data = await UserModel.find({}, { __v: 0, _id: 0 }).sort({ following: 1 });
  } else if (sortby == "public_gists") {
    data = await UserModel.find({}, { __v: 0, _id: 0 }).sort({
      public_gists: 1,
    });
  } else if (sortby == "public_repos") {
    data = await UserModel.find({}, { __v: 0, _id: 0 }).sort({
      public_repos: 1,
    });
  } else if (sortby == "created_at") {
    data = await UserModel.find({}, { __v: 0, _id: 0 }).sort({ created_at: 1 });
  } else {
    data = await UserModel.find({}, { __v: 0, _id: 0 });
  }

  res.send(data);
};
module.exports = SortData;
