const mongoose = require("mongoose");

const sensorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, required: true },
    status: { type: String, enum: ["normal", "warning", "critical"], default: "normal" },
    lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Sensor", sensorSchema);
