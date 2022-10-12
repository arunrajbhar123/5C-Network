const FindFriends = (req, res, next) => {
    console.log(req.body);
  res.send("hi find");
};
module.exports = FindFriends;
