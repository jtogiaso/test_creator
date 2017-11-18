// *****************************************************************************
// Server.js - This file for testing front end functionality.
//

var express = require("express");
var path = require("path");
var hbs = require("express-handlebars");

// Set up express

var app = express();
app.engine("hbs", hbs({extname: "hbs", defaultLayout: "main", layoutsDir: __dirname + "/views/layouts/"}));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static("public"));


var questions = [
	{
		stem: "Who won the World Series in 1971?",
		answer: "The Pittsburgh Pirates",
		distractorA: "The Cincinnati Reds",
		distractorB: "The Boston Red Sox",
		distractorC: "The Baltimore Orioles"
    }
];

var tests = [
	"MLB Test",
	"NFL Test",
	"NHL Test"
];

var usernames = ["Joe", "Mary", "Bob"];

// Set up routes

app.set("port", (process.env.PORT || 3000));


app.get("/", function(req, res) {
	res.render("home", {
		title: "home page",
		content: "This is the home page."
	});
});

app.get("/create-test", function(req, res) {
	res.render("createT", {
		title: "create test",
		username: usernames[0],
		stem: questions[0].stem,
		answer: questions[0].answer,
		first_distractor: questions[0].distractorA,
		second_distractor: questions[0].distractorB,
		third_distractor: questions[0].distractorC,
		testArray: tests
	});
});

app.get("/take-test", function(req, res) {
	res.render("takeT", {
		title: "take test",
		content: "This is the page for taking tests"
	});
});

app.listen(app.get("port"), function() {
	console.log("Server started on port " + app.get("port"));
});

