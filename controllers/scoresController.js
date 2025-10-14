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

exports.getTopScores = async (req, res) => {
  try {
    const { ritmo, modo } = req.query;
    const filtro = {};
    if (ritmo) filtro.ritmo = ritmo;
    if (modo) filtro.modo = modo;

    const topScores = await Score.find(filtro).sort({ puntaje: -1 }).limit(10);
    res.json(topScores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
