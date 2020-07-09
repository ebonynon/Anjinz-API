const express = require("express");
const router = express.Router();

// Load part model
const part = require("../../models/Part");
const auth = require("../../middleware/auth"); //auth

// @route GET api/parts/test
// @description tests parts route
// @access Public
router.get("/test", (req, res) => res.send("part route testing!"));

// @route GET api/parts
// @description Get all parts
// @access Public
router.get("/", (req, res) => {
  console.log(req.query);

  var brand = req.query.brand;
  var modle = req.query.modle;
  var part_name = req.query.part_name;
  var part_number = req.query.part_number;

  if (part_number) {
    part
      .find({ part_number: part_number })
      .then((parts) => res.json(parts))
      .catch((err) => res.status(404).json({ nopartsfound: "No parts found" }));
  }

  if (brand && modle && part_name) {
    part
      .find({ brand: brand, modle: modle, part_name: part_name })
      .then((parts) => res.json(parts))
      .catch((err) => res.status(404).json({ nopartsfound: "No parts found" }));
  }
  // part
  //   .find()
  //   .then((parts) => res.json(parts))
  //   .catch((err) => res.status(404).json({ nopartsfound: "No parts found" }));
});

// @route GET api/parts/:id
// @description Get single part by id
// @access Public
router.get("/:id", (req, res) => {
  part
    .findById(req.params.id)
    .then((part) => res.json(part))
    .catch((err) => res.status(404).json({ nopartfound: "No part found" }));
});

// @route GET api/parts
// @description add/save part
// @access Public
router.post("/", auth, (req, res) => {
  part
    .create(req.body)
    .then((part) => res.json({ msg: "part added successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to add this part" }));
});

// @route GET api/parts/:id
// @description Update part
// @access Public
router.put("/:id", auth, (req, res) => {
  part
    .findByIdAndUpdate(req.params.id, req.body)
    .then((part) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/parts/:id
// @description Delete part by id
// @access Public
router.delete("/:id", auth, (req, res) => {
  part
    .findByIdAndRemove(req.params.id, req.body)
    .then((part) => res.json({ mgs: "part entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a part" }));
});

module.exports = router;
