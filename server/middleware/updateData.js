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
  if (!data.acknowledged) {
    return res.send({ message: "data not exits or data not update" });
  }
  next();
};

module.exports = UpdateData;
