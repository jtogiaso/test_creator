// *****************************************************************************
//
// testCreate.js - Client script for login/signup page.
//
// =============================================================

// Global Variables
// =============================================================
var currentUser;
var currentTest;

// getUser
// =============================================================
var getUser = function() {
	currentUser = sessionStorage.getItem("username");
	if (currentUser) {
		$("#currentUser").text(currentUser);
	} else {
		$("#currentUser").text("ERROR, missing username");
	}
};

// Create a test
// =============================================================

var createTest = function() {
	let parameters = {
		type: 'POST',
		url: "/api/test",
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

// Get List of tests created by user
// =============================================================

var getTestList = function() {
	let parameters = {
		type: 'GET',
		url: "/api/test"
	};

	$.ajax(parameters)
		.done(function (data) {			
			console.log(data);
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
		url: "/api/question",
		data: {
			test_name: currentTest,
			question_phrase : $("input[name='stem']").val().trim(),
			answers: {
				1: {phrase: $("input[aria-describedby='answer-label']").val().trim(), correct_answer: true},
				2: {phrase: $("input[aria-describedby='distractor-a-label']").val().trim(), correct_answer: false},
				3: {phrase: $("input[aria-describedby='distractor-a-label']").val().trim(), correct_answer: false},
				4: {phrase: $("input[aria-describedby='distractor-a-label']").val().trim(), correct_answer: false}			
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

$('#questionCreate-btn').click(function (event) {
	event.preventDefault();
	console.log("Create test button was clicked.");
	createTest();

});

$("#lob").on("click", function(event) {
	let parameters = {
		type: 'GET',
		url: "/logout"
	};
	console.log("Yup I was clicked");
	$.ajax(parameters)
	.done( data => {
		let test_url = window.location.href.split('/');
		let new_href = test_url[0] + "//" + test_url[2] ;
		window.location.replace(new_href);
	});
});

// Document Ready
// =============================================================

$( document ).ready(function() {	
	console.log("testCreate.js is now loaded.");
	getUser();
	getTestList();
});

