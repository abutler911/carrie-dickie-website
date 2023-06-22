const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

// Set view engine to ejs
app.set("view engine", "ejs");

// Tell express to use ejs layouts
app.use(ejsLayouts);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/stageandspotlight", (req, res) => {
  const videos = [
    { thumbnail: "/imgs/carrie4.jpg", url: "/path/to/video1.mp4" },
    { thumbnail: "/imgs/carrie4.jpg", url: "/path/to/video1.mp4" },
    { thumbnail: "/imgs/carrie4.jpg", url: "/path/to/video1.mp4" },
    { thumbnail: "/imgs/carrie4.jpg", url: "/path/to/video1.mp4" },
    { thumbnail: "/imgs/carrie4.jpg", url: "/path/to/video1.mp4" },
    { thumbnail: "/imgs/carrie4.jpg", url: "/path/to/video1.mp4" },
    { thumbnail: "/imgs/carrie4.jpg", url: "/path/to/video1.mp4" },
    { thumbnail: "/imgs/carrie4.jpg", url: "/path/to/video1.mp4" },
  ];
  res.render("stageAndSpotlight", { videos: videos });
});

app.listen(PORT, () => {
  console.log(`Server up on port ${PORT}...`);
});
