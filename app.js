const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./routes/home.routes"));
app.use(require("./routes/admin.routes"));
app.use(require("./routes/add.routes"));
app.use(require("./routes/details.routes"));
app.use(require("./routes/registration.routes"));

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
