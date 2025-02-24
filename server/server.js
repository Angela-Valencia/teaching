const express = require("express");
const cors = require("cors");
const { initializeDatabase } = require("./database");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const translations = initializeDatabase();

app.get("/api/translations", (req, res) => {
  res.json(translations);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
