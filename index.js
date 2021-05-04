const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send(`<h1>Halo ini di production</h1>`);
});

app.listen(PORT, () => console.log("JALAN di Port " + PORT));
