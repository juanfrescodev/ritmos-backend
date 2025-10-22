//trivia.js
const express = require("express");
const router = express.Router();
const { saveTriviaStat, getTriviaStatsByUser } = require("../controllers/triviaController");

router.post("/", saveTriviaStat);
router.get("/user/:id", getTriviaStatsByUser);

module.exports = router;
