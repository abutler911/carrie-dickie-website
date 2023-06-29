const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const connectDB = require("./config/db");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
const bodyParser= require('body-parser');



const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

// Set view engine to ejs
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

// Tell express to use ejs layouts
app.use(ejsLayouts);
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user || !user.isValidPassword(password)) {
        return done(null, false, { message: "Username or password is wrong" });
      }
      return done(null, user);
    });
  })
);

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

app.get("/", (req, res) => {
  res.render("index", { pageTitle: "Home" });
});

app.post("/register", (req, res) => {
  let { firstname, lastname, username, email, password } = req.body;
  let user = new User({ firstname, lastname, username, email, password });
  user
    .save()
    .then((user) => {
      return res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send("Error registering user");
    });
});


app.get("/register", (req, res) => {
  res.render("register", { pageTitle: "Register" });
});

app.get("/about", (req, res) => {
  res.render("about", { pageTitle: "About" });
});

app.get("/carriescareer", (req, res) => {
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
  res.render("carriescareer", {
    videos: videos,
    pageTitle: "Carries Career",
  });
});

app.listen(PORT, () => {
  console.log(`Server up on port ${PORT}...`);
});
