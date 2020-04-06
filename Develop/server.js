// Dependencies --> fs, express & path
var fs = require("fs");
var express = require("express");
var path = require("path");

const app = express()
var PORT = 8080;


// Empty note array
var listofNotes = [];



// Routes
// --------------------------

// GET
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});


// POST
app.post("/api/notes", function(req, res) {
    var notePlus = req.body;
    console.log(JSON.parse (data));

    // Send user entry to listofNotes array (I dont know if its working...)
    listofNotes.push(notePlus);

    fs.writeFile("Develop/db/db.json", JSON.stringify(listofNotes));
    res.json(notePlus);
});

// --------------------------



// LISTEN
app.listen(PORT, function() {
    console.log("Listening on localhost: " + PORT);
});