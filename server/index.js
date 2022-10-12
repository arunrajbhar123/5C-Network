const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").congif();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, async () => {
  try {
  } catch {}
  console.log("server is running port:", porcess.env.PORT);
});
