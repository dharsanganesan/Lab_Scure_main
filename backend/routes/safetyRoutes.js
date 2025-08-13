const express = require("express");
const router = express.Router();
const { getSafetyData, addSafetyData } = require("../controllers/safetyController");

router.get("/", getSafetyData);
router.post("/", addSafetyData);

module.exports = router;
