const express = require("express");
const UserRoute = express.Router();

const CheckUserPresent = require("../middleware/checkPresent");
const FetchUser = require("../middleware/FetchUser");
const FindFriends = require("../middleware/findFriends");
const DeleteData = require("../middleware/deleteData");
const UpdateData = require("../middleware/updateData");

UserRoute.get(
  "/:username",
  CheckUserPresent,
  FetchUser,
  FindFriends,
  (req, res) => {
    const { data } = req.body;
    res.status(201).send({ message: "data Save", data: data });
  }
);

UserRoute.delete("/:username", DeleteData, (req, res) => {
  res.status(404).send({ message: "data deleted from database" });
});

UserRoute.patch("/:username", UpdateData, (req, res) => {
  res.send("hi");
});
module.exports = UserRoute;
