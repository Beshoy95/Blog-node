const mysql = require("mysql2");

const q = mysql.createConnection({
  host: "localhost",
  database: "blogpostdb",
  user: "root",
  password: "",
});

module.exports = q;
