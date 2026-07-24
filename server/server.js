require("dotenv").config();

const express = require("express");
const cors = require("cors");

const analyzeRoutes = require("./src/routes/analyze.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Page Pulse API is running 🚀",
  });
});

app.use("/api/analyze", analyzeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});