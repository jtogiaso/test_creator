// *****************************************************************************
//
// testCreate.js - Client script for login/signup page.
//
// =============================================================

// Global Variables
// =============================================================
var currentUser;
var currentTest;

// Create a test
// =============================================================

var createTest = function() {
	let parameters = {
		type: 'POST',
		url: "api/test",
		data: {
			test_name: $("#testCreate-input").val().trim()
		}
	};

	$.ajax(parameters)
		.done(function (data) {
			console.log("Test " + parameters.data.test_name + " has been created.");
			console.log(data);
			currentTest = parameters.data.test_name;
		})
		.catch(function (err) {
			console.log("Error: ");
			console.log(err);
		});	
};

// Create a question
// =============================================================

var createQuestion = function() {
	let parameters = {
		type: 'POST',
		url: "api/question",
		data: {
			test_name: currentTest,
			question_phrase : $("").val().trim(),
			answers: {
				1: {phrase: $("").val().trim(), correct_answer: true},
				2: {phrase: $("").val().trim(), correct_answer: false},
				3: {phrase: $("").val().trim(), correct_answer: false},
				4: {phrase: $("").val().trim(), correct_answer: false}			
				}
		}
	};

	$.ajax(parameters)
		.done(function (data) {
			console.log("Test " + parameters.data.test_name + " has been created.");
			console.log(data);

		})
		.catch(function (err) {
			console.log("Error: ");
			console.log(err);
		});	
};

// Event Listeners
// =============================================================

$('#testCreate-btn').click(function (event) {
	event.preventDefault();
	console.log("Create test button was clicked.");
	createTest();

});

// Document Ready
// =============================================================

$( document ).ready(function() {	
	console.log("Index.js is now loaded.");
});

