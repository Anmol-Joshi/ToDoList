const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); //can be true or false but we need to give it a value to use bodyParser
app.use(express.static("public")); //static files(css) files will be in the public folder
app.set("view engine", "ejs");

let items = []; //array to store the to do list items

app.get("/", (req, res) => {
  let today = new Date();
  let options = { weekday: "long", day: "numeric", month: "long" };
  let day = today.toLocaleString("en-US", options);

  res.render("list", { kindOfDay: day, newListItem: items });
});

app.post("/", (req, res) => {
  item = req.body.newItem;
  items.push(item);
  res.redirect("/"); //redirects to the home page
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
