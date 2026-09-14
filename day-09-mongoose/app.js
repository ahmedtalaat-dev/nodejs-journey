const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/students");
const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/student_db")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });
app.get("/", (req, res) => {
  res.send("Students API");
});
app.use("/api/students", studentRoutes);
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
