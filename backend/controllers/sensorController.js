const Sensor = require("../models/Sensor");

exports.getSensors = async (req, res) => {
    try {
        const sensors = await Sensor.find().sort({ lastUpdated: -1 });
        res.json(sensors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createSensor = async (req, res) => {
    try {
        const newSensor = new Sensor(req.body);
        await newSensor.save();
        res.status(201).json(newSensor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
