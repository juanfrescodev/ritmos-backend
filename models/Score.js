//Score.js
const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  puntaje: { type: Number, required: true },
  ritmo: { type: String, required: true },
  modo: { type: String, required: true },
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Score', scoreSchema);
