const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

app.use(express.static(path.join(__dirname, "../public")));
hbs.registerPartials(path.join(__dirname, "../template/partials"));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../template/views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/mccafe", (req, res) => {
  res.render("mcCafe");
});

app.get("/aboutfood", (req, res) => {
  res.render("aboutFood");
});

app.get("/signup", (req, res) => {
  res.render("signUp");
});

app.get("/deals", (req, res) => {
  res.render("deals");
});

app.get("/trending", (req, res) => {
  res.render("trending");
});

app.listen(8000, () => {
  console.log("port 8000");
});
