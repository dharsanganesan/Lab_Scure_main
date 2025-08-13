const Alert = require("../models/Alert");

exports.getAlerts = async (req, res) => {
    try {
        const alerts = await Alert.find().sort({ createdAt: -1 });
        res.json(alerts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createAlert = async (req, res) => {
    try {
        const newAlert = new Alert(req.body);
        await newAlert.save();
        res.status(201).json(newAlert);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
