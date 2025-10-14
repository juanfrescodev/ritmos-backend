//scores.Controller.js
const Score = require('../models/Score');

exports.createScore = async (req, res) => {
  try {
    const nuevoScore = new Score(req.body);
    await nuevoScore.save();
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createScore = async (req, res) => {
  try {
    console.log("Recibido:", req.body); // 👈 esto
    const nuevoScore = new Score(req.body);
    await nuevoScore.save();
    res.status(201).json({ success: true });
  } catch (err) {
    console.error("Error al guardar score:", err.message); // 👈 y esto
    res.status(500).json({ error: err.message });
  }
};
