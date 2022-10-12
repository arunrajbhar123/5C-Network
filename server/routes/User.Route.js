const express = require("express");
const UserRoute = express.Router();

const CheckUserPresent = require("../middleware/checkPresent");
const FetchUser = require("../middleware/FetchUser");
const FindFriends = require("../middleware/findFriends");
UserRoute.get("/:username", CheckUserPresent, FetchUser,FindFriends, (req, res) => {});

module.exports = UserRoute;
