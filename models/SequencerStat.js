const mongoose = require("mongoose");

const sequencerStatSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  ritmosUsados: [String],
  duracion: Number,
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model("SequencerStat", sequencerStatSchema);
