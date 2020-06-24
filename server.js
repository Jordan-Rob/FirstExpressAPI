const express = require("express");
const customer = require("./customer");
const router = require("./api/ourAPI");

const app = express();

app.use("/api/customer", router);

app.listen(3000, () => {
  console.log("server is running");
});
