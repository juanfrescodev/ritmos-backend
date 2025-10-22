//triviaController.js
const TriviaStat = require("../models/TriviaStat");

exports.saveTriviaStat = async (req, res) => {
  try {
    const stat = new TriviaStat(req.body);
    await stat.save();
    res.status(201).json({ success: true });
  } catch (err) {
    console.error("❌ Error al guardar trivia:", err.message);
    res.status(500).json({ error: err.message });
  }
};

exports.getTriviaStatsByUser = async (req, res) => {
  try {
    const stats = await TriviaStat.find({ userId: req.params.id }).sort({ fecha: -1 });
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
