//triviastat.js
const mongoose = require("mongoose");

const triviaStatSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
  nombre: { type: String, required: true },
  puntaje: Number,
  aciertosPorRitmo: { type: Object }, // ej: { maksum: 3, baladi: 1 }
  erroresPorRitmo: { type: Object }, // ej: { saidi: 2 }
  nivelMaximo: Number,
  rachaMaxima: Number,
  logros: [String],
  duracion: Number, // en segundos
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model("TriviaStat", triviaStatSchema);
