//scores.Controller.js
const Score = require('../models/Score');

// 📝 Guardar nuevo puntaje
exports.createScore = async (req, res) => {
  try {
    console.log("📩 POST recibido:", req.body);

    const { nombre, puntaje, ritmo, modo } = req.body;

    // Validación básica
    if (!nombre || !puntaje || !ritmo || !modo) {
      return res.status(400).json({ error: "Faltan campos requeridos" });
    }

    const nuevoScore = new Score({
      nombre,
      puntaje,
      ritmo,
      modo,
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

    if (ritmo) filtro.ritmo = ritmo;
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
