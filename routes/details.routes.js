const app = require("express").Router();

app.get("/details", (req, res) => {
  res.render("details");
});

module.exports = app;
