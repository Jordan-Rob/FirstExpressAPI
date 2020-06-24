const express = require("express");

const router = express.Router();
const customer = require("../customer");

router.get("/", (request, response) => {
  response.json(customer);
});

module.exports = router;
