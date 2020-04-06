// Dependencies --> fs, express & path
var fs = require("fs");
var express = require("express");
var path = require("path");


const app = express()
var PORT = 8080;


// Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });



// Listener
app.listen(PORT, function() {
    console.log("Listening on localhost: " + PORT);
});