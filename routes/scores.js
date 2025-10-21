//scores.js
const express = require('express');
const router = express.Router();
const { createScore, getTopScores } = require('../controllers/scoresController');

router.post('/', createScore);
router.get('/top', getTopScores);
router.get('/user/:id', getScoresByUser);

module.exports = router;
