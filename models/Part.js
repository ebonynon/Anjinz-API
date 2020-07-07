const mongoose = require("mongoose");

const PartSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  modle: {
    type: String,
    required: true,
  },
  applicability: {
    type: String,
    required: true,
  },
  part_number: {
    type: String,
    required: true,
  },
  part_name: {
    type: String,
    required: true,
  },
  production_period: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  base_price: {
    type: String,
    required: true,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Part = mongoose.model("part", PartSchema);
