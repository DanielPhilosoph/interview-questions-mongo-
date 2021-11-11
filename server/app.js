require("dotenv").config();
const cors = require("cors");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// * MongoDB connection
const url = `mongodb+srv://daniel_mongo_user:${process.env.PASSWORD}@cluster0.xx3io.mongodb.net/accountant?retryWrites=true&w=majority`;

mongoose.connect(url);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
