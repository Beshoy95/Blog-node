const q = require("../db/db");
const bcrypt = require("bcrypt");
const app = require("express").Router();

app.get("/register", (req, res) => {
  res.render("registration", { isValid: true });
});

app.post("/handleRegister", (req, res) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, 6, function (err, hash) {
    q.execute(`select * from users where email='${email}'`, (err, data) => {
      if (data.length == 0) {
        q.execute(
          `insert into users (name,email,password) values('${name}','${email}','${hash}')`
        );
        res.redirect("/register");
      } else {
        console.log("email exists");
        res.render("registration", { isValid: false });
      }
    });
  });
});

app.get("/handleRegister", (req, res) => {
  res.redirect("/register");
});

module.exports = app;
