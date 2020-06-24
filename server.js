const express = require("express");
const customer = require("./customer");

const app = express();

app.listen(3000, () => {
  console.log("server is running");
});
