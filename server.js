const app = require("express")();

app.get("/", (req, res) => {
  res.send("Ola mundo");
});

app.listen(3002);
