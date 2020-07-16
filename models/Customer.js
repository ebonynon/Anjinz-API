const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  part_number: {
    type: String,
    required: true,
  },
  customer_name: {
    type: String,
    required: true,
  },
  nic_number: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  status_one: {
    type: Boolean,
  },
  status_two: {
    type: Boolean,
  },
  status_three: {
    type: Boolean,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Customer = mongoose.model("customer", CustomerSchema);
