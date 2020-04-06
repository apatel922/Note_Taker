// Dependencies --> fs, express & path
var fs = require("fs");
var express = require("express");
var path = require("path");


const app = express()
var PORT = 8080;



// Empty var to collect notes
var noteList = [];


// Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});



app.post("/api/notes", function(req, res) {
    var notePlus = req.body;
  
    console.log(notePlus);

    noteList.push(notePlus);
    res.json(notePlus);
  });




// Listener
app.listen(PORT, function() {
    console.log("Listening on localhost: " + PORT);
});