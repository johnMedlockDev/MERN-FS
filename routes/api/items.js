const express = require("express");
const router = express.Router();

// Item Model
const Item = require("../../models/Item");

// @route Get api/Items
// @desc Get All Items
// @access Public
router.get("/");

module.exports = router;
