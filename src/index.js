
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/your-database-name", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const express = require("express");
const app = express();
const port = process.env.RUNNING_PORT || 8080;

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ status: "success", data: "Welcome to your Express.js project" });
});

app.use((req, res) => {
  res.status(404).json({ status: "error", message: "Not Found" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
