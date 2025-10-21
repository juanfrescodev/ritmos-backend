const express = require("express");
const router = express.Router();
const { saveSequencerStat, getSequencerStatsByUser } = require("../controllers/sequencerController");

router.post("/", saveSequencerStat);
router.get("/user/:id", getSequencerStatsByUser);

module.exports = router;
