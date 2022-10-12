const express = require("express");
const app = express();
const cors = require("cors");

const connection = require("./config/db");
const UserRoute = require("./routes/User.Route");

require("dotenv").config();
app.use(cors());
app.use(express.json());

app.use("/", UserRoute);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("db is connected");
  } catch {
    console.log("db is not connected");
  }
  console.log("server is running port:", process.env.PORT);
});
