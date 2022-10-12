const UserModel = require("../model/user.model");
const UpdateData = async (req, res, next) => {
  const { username } = req.params;
  const { location, blog, bio } = req.body;
  const data = await UserModel.updateOne(
    { username },
    {
      $set: {
        location,
        blog,
        bio,
      },
    }
  );

  if (data.modifiedCount == 0) {
    return res.send({ message: "data is already updated" });
  }
  next();
};

module.exports = UpdateData;
