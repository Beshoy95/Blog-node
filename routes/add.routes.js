const q = require("../db/db");

const app = require("express").Router();

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/handleAdd", (req, res) => {
  const { title, blogtext } = req.body;
  q.execute(
    `insert into blogpost(title,blogtext) values('${title}','${blogtext}')`
  );
  res.redirect("/add");
});

module.exports = app;
