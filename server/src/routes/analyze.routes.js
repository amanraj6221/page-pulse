
const express = require("express");

const router = express.Router();

const {
  analyzeWebsite,
} = require("../controllers/analyze.controller");

// POST /api/analyze
router.post("/", analyzeWebsite);

module.exports = router;

