//scores.Controller.js
const Score = require('../models/Score');

// 📝 Guardar nuevo puntaje
exports.createScore = async (req, res) => {
  try {
    console.log("📩 POST recibido:", req.body);

    const { nombre, userId, puntaje, ritmos, modo, notaFinal, tendencia, erroresPorGolpe } = req.body;

    if (!nombre || !puntaje || !ritmos || !modo) {
      return res.status(400).json({ error: "Faltan campos requeridos" });
    }

    const nuevoScore = new Score({
      nombre,
      userId,
      puntaje,
      ritmos,
      modo,
      notaFinal,
      tendencia,
      erroresPorGolpe,
      fecha: new Date()
    });

    await nuevoScore.save();
    res.status(201).json({ success: true });
  } catch (err) {
    console.error("❌ Error al guardar score:", err.message);
    res.status(500).json({ error: err.message });
  }
};

// 🏆 Obtener ranking filtrado por ritmo y modo
exports.getTopScores = async (req, res) => {
  try {
    const { ritmo, modo } = req.query;
    const filtro = {};

    if (ritmo) filtro.ritmos = { $in: [ritmo] };
    if (modo) filtro.modo = modo;

    const topScores = await Score.find(filtro)
      .sort({ puntaje: -1 })
      .limit(10);

    res.json(topScores);
  } catch (err) {
    console.error("❌ Error al obtener ranking:", err.message);
    res.status(500).json({ error: err.message });
  }
};


// 📈 Obtener todos los puntajes de un usuario
exports.getScoresByUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const mongoose = require('mongoose');
    const scores = await Score.find({
      userId: req.params.id,
      modo: "practica" // ✅ solo sesiones de práctica
    }).sort({ fecha: -1 });



    res.json(scores);
  } catch (err) {
    console.error("❌ Error al obtener scores por usuario:", err.message);
    res.status(500).json({ error: err.message });
  }
};
