const express = require("express");
const uploadRoutes = require("./routes/upload");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("File Upload API");
});

app.use("/api/upload", uploadRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
