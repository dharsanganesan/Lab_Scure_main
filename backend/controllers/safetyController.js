const Safety = require("../models/Safety");

// GET all safety data
const getSafetyData = async (req, res) => {
  try {
    const safetyData = await Safety.find();
    res.json(safetyData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST new safety data
const addSafetyData = async (req, res) => {
  try {
    const safety = new Safety({
      name: req.body.name,
      status: req.body.status
    });
    await safety.save();
    res.json(safety);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getSafetyData, addSafetyData };
