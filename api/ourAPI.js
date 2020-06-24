const express = require("express");

const router = express.Router();
const customer = require("../customer");

router.get("/", (request, response) => {
  response.json(customer);
});

router.get("/:id", (request, response) => {
  response.json(
    customer.filter(
      (singleCustomer) => singleCustomer.id === parseInt(request.params.id)
    )
  );
});

module.exports = router;
