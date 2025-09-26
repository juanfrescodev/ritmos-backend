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
    const topScores = await Score.find().sort({ puntaje: -1 }).limit(10);
    res.json(topScores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};