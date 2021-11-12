const mongoose = require("mongoose");

const questionSchem = new mongoose.Schema({
  title: { type: String, required: true },
  correctAnswer: { type: String, required: true },
  answers: [{ type: String }],
  difficulty: { type: Number, required: true },
});

const Question = mongoose.model("questions", questionSchem);

module.exports = Question;
