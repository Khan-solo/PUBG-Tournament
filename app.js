var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));



app.get("/", function(req, res) {
    res.render("index");
});


app.get("/sign-in", function(req, res) {
    res.render("sign-in");
});

app.get("/sign-up", function(req, res) {
    res.render("sign-up");
});











app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The Regal Gaming server has started!")
});