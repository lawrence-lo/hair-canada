// import required modules
const express = require("express");
const path = require("path");

// set up Express object
const app = express();
const port = process.env.PORT || "8888";

// set up paths
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

// render pages
app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});
app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});
app.get("/services", (req, res) => {
    res.render("services", { title: "Services" });
});

// set up server listening
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});