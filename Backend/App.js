const express = require("express");
const cors = require("cors");
const app = express();
const Port = 5000;
const mongoose = require("mongoose");

const mongoUrl = require("./keys.js");
mongoose.connect(mongoUrl);
require("./models/model");
app.use(cors());
app.use(express.json());
app.use(require("./routes/auth.js"));
mongoose.connection.on("connected", () => {
  console.log("successfully connected to mongo db");
});

mongoose.connection.on("error", () => {
  console.log("not connected to mongo db");
});

app.get("/", (req, res) => {
  res.json(data);
});

app.listen(Port, () => {
  console.log("server is running on   " + Port);
});
