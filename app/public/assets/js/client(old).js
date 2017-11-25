//////////////////////////////////////////////
// Global Variables

var currentUser;
var currentTest;

//////////////////////////////////////////////
// Sign up 
//TODO adjust index.html to match these properties.


$("#signup").on("submit", function (event) {
	event.preventDefault();
	var newUser = {
		firstname: $("[name='firstname']").val().trim(),
		lastname: $("[name='lastname']").val().trim(),
		email: $("[name='email']").val().trim(),
		username: $("[name='username']"),
		password: $("[name='password']").val().trim()
	};

	// Send the POST request.
	$.ajax("/signup", {
		type: "POST",
		data: newUser
	}).then(
		function() {
			console.log("New user created.");
		}
	);
});

//////////////////////////////////////////////
// Log in functions
//TODO adjust index.html to match these properties.


// set user to 


$("#signin").on("submit", function(event) {
	event.preventDefault();
	var newLogin = {
		username: $("[name='username']").val().trim(),
		password: $("[name='password']").val().trim()
	};

	// Send the GET request.
	$.ajax("/signin", {
		type: "GET",
		data: newLogin
	}).then(
		function() {
			console.log("User logged in.");
		}
	);
});

//////////////////////////////////////////////
// TEST CREATE

$(".createT-form").on("submit", function (event) {
	event.preventDefault();
	currentTest = $("#createT-input").val().trim();
	getUser();

	var newTest = {
		username: currentUser,
		test_name: currentTest
	};

	$.ajax("/api/new_test_name", {
		type: "POST",
		data: newTest
	}).then(
		function () {
			console.log("created new test");
		}
	);
});

//////////////////////////////////////////////
// TEST READ
//TODO finish loadTest function

var loadTests = function() {
	
	$.ajax("/api/all_tests", {
		type: "GET",
		data: currentUser
	}).then(
		function (testData) {
			console.log("tests retrieved");
		}
	);	
};

//////////////////////////////////////////////
// QUESTION CREATE
$(".createT-form").on("submit", function (event) {
	event.preventDefault();
	var answer_falseArr = [];
	currentTest = $("#createT-input").val().trim();
	$("[name='answer'][value='false']").val().trim().push(answer_falseArr);
	
	var newQuestion = {
		test_name: currentTest,
		question_phrase: $("[name='stem']").val().trim(),
		answer_true: $("[name='answer'][value='true']").val().trim(),
		answer_false: answer_falseArr
	};

	$.ajax("/api/new_question_and_answers", {
		type: "POST",
		data: newQuestion
	}).then(
		function () {
			console.log("created new question");
		}
	);

// QUESTION READ

	$.ajax("/api/all_question_and_answers/" + currentTest, {
		type: "GET"
	}).then(
		function (questionData) {
			console.log(questionData);
			//TODO parse data and distribute via handlebars
		}
	);
	
});



//////////////////////////////////////////////
// QUESTION UPDATE


//////////////////////////////////////////////
// QUESTION DELETE



$(document).ready(function () {

	//getUser();


}); //end document ready




