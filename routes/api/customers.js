const express = require("express");
const router = express.Router();

// Load Customer model
const Customer = require("../../models/Customer");
const auth = require("../../middleware/auth"); //auth

// @route GET api/customers/test
// @description tests customers route
// @access Public
router.get("/test", (req, res) => res.send("Customer route testing!"));

// @route GET api/customers
// @description Get all customers
// @access Public
router.get("/", (req, res) => {
  Customer.find()
    .then((customers) => res.json(customers))
    .catch((err) =>
      res.status(404).json({ nocustomersfound: "No customers found" })
    );
});

// @route GET api/customers/nic
// @description Get all parts
// @access Public
router.get("/nic/", (req, res) => {
  console.log(req.query);

  var nic_number = req.query.nic_number;

  if (nic_number) {
    part
      .find({ part_number: part_number })
      .then((parts) => res.json(parts))
      .catch((err) => res.status(404).json({ nopartsfound: "No parts found" }));
  }
});

// @route GET api/customers/:id
// @description Get single customer by id
// @access Public
router.get("/:id", (req, res) => {
  Customer.findById(req.params.id)
    .then((customer) => res.json(customer))
    .catch((err) =>
      res.status(404).json({ nocustomerfound: "No customer found" })
    );
});

// @route GET api/customers
// @description add/save customer
// @access Public
router.post("/", (req, res) => {
  Customer.create(req.body)
    .then((customer) => res.json({ msg: "customer added successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this customer" })
    );
});

// @route GET api/customers/:id
// @description Update customer
// @access Public
//router.put("/:id", auth, (req, res) => {
router.put("/:id", (req, res) => {
  Customer.findByIdAndUpdate(req.params.id, req.body)
    .then((customer) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/customers/:id
// @description Delete customer by id
// @access Public
//router.delete("/:id", auth, (req, res) => {
router.delete("/:id", (req, res) => {
  Customer.findByIdAndRemove(req.params.id, req.body)
    .then((customer) =>
      res.json({ mgs: "customer entry deleted successfully" })
    )
    .catch((err) => res.status(404).json({ error: "No such a customer" }));
});

module.exports = router;
