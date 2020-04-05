// Dependencies --> fs & express
var fs = require("fs");
var express = require("express");


const app = express()
var PORT = 8080;

app.listen(PORT, function() {
    fs.readFile(__dirname + "/db/db.json", function(err, data) {
        if(err) throw err;
        notesArr = JSON.parse(data);
    })
    console.log("Listening on localhost:" + PORT);
})