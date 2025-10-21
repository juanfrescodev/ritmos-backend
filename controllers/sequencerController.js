const SequencerStat = require("../models/SequencerStat");

exports.saveSequencerStat = async (req, res) => {
  try {
    const { userId, ritmosUsados, duracion, fecha } = req.body;
    const stat = new SequencerStat({ userId, ritmosUsados, duracion, fecha });
    await stat.save();
    res.status(201).json({ success: true });
  } catch (err) {
    console.error("❌ Error al guardar secuenciador:", err.message);
    res.status(500).json({ error: err.message });
  }
};

exports.getSequencerStatsByUser = async (req, res) => {
  try {
    const stats = await SequencerStat.find({ userId: req.params.id }).sort({ fecha: -1 });
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
