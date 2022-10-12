const express = require("express");
const UserRoute = express.Router();

const CheckUserPresent = require("../middleware/checkPresent");
const FetchUser = require("../middleware/FetchUser");

UserRoute.get("/:username", CheckUserPresent, FetchUser, (req, res) => {});

module.exports = UserRoute;
