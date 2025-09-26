const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  puntaje: { type: Number, required: true },
  ritmo: { type: String },
  modo: { type: String },
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Score', scoreSchema);
