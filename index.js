const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes");
const mongoose = require("mongoose");

app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//data base

mongoose
  .connect("mongodb://localhost:27017/myapppp_db")
  .then(() => {
    console.log("connected to myapp db");
  })
  .catch((error) => {
    console.error("error connect db :", error);
  });
