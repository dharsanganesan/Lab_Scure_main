const express = require("express");
const router = express.Router();
const { getSensors, createSensor } = require("../controllers/sensorController");

router.get("/", getSensors);
router.post("/", createSensor);

module.exports = router;
