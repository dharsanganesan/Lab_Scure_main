const mongoose = require("mongoose");

const safetySchema = new mongoose.Schema({
    name: { type: String, required: true },
    status: { type: String, enum: ["Checked", "Pending", "Faulty"], default: "Pending" },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Safety", safetySchema);
