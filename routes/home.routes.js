const q = require("../db/db");

const app = require("express").Router();

app.get("/", (req, res) => {
  q.execute(`select * from blogpost`, (err, data) => {
    res.render("home", { data });
  });
});

module.exports = app;
