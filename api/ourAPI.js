const express = require("express");
const uuid = require("uuid");

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

router.post("/", (request, response) => {
  const newObject = {
    id: uuid.v5,
    name: request.body.name,
    location: request.body.location,
  };

  if (!newObject.name && !newObject.location) {
    return response.status(400).json();
  }
  customer.push(newObject);
  response.json(customer);
});

router.put("/:id", (request, response) => {
  const searchCustomer = customer.some(
    (singleCustomer) => singleCusomter.id === parseInt(request.params.id)
  );
  if (searchCustomer) {
  }
});

module.exports = router;
