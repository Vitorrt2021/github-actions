const app = require("express")();

app.get("/", (req, res) => {
  res.json("Hello world");
});

module.exports = app;
