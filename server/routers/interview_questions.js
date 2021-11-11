const express = require("express");
const Questions = require("../schems/questions");
const router = express.Router();

// * Router Interview Questions
// ? At /interviewQ

router.get("/list", async (req, res, next) => {
  res.send(await Questions.find({}));
});

module.exports = router;
