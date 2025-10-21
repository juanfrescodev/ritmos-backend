//Score.js
const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  puntaje: { type: Number, required: true },
  ritmo: { type: String, required: true },
  modo: { type: String, required: true },
  fecha: { type: Date, default: Date.now },

  // 🧠 Nuevos campos para análisis
  notaFinal: { type: Number, required: false },
  tendencia: { type: String, required: false },
  erroresPorGolpe: { type: Object, required: false }, // ej: { dum: 3, tak: 1 }
});
