const express = require("express");
const Questions = require("../schems/questions");
const router = express.Router();

// * Router Interview Questions
// ? At /interviewQ

router.get("/list", async (req, res, next) => {
  res.send(await Questions.find({}));
});

router.put("/update", async (req, res, next) => {
  try {
    await Questions.updateOne(
      { _id: req.body.id },
      {
        title: req.body.title,
        correctAnswer: req.body.correctAnswer,
        answers: req.body.answers,
        difficulty: req.body.difficulty,
      },
      { runValidators: true }
    );
    res.json({ message: "Updated" });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    await Questions.create({
      title: req.body.title,
      correctAnswer: req.body.correctAnswer,
      answers: req.body.answers,
      difficulty: req.body.difficulty,
    });
    res.json({ message: "Created" });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
