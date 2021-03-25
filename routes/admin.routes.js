const q = require("../db/db");

const app = require("express").Router();

app.get("/admin", (req, res) => {
  q.execute(`select * from blogpost`, (err, data) => {
    res.render("admin", { data });
  });
});

app.get("/search", (req, res) => {
  const { search } = req.query;
  q.execute(
    `select * from blogpost where title like '%${search}%'`,
    (err, data) => {
      res.render("admin", { data });
    }
  );

});

module.exports = app;
