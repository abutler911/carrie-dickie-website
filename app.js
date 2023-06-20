const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine to ejs
app.set("view engine", "ejs");

// Tell express to use ejs layouts
app.use(ejsLayouts);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("layout");
});

app.listen(PORT, () => {
  console.log(`Server up on port ${PORT}...`);
});
