// *****************************************************************************
//
// testTake.js - Client script for login/signup page.
//
// =============================================================

// Global Variables
// =============================================================
var currentTest;
var currentUser;

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


// Load a test
// =============================================================

var getTest = function(student_test_query) {
	console.log(student_test_query);
	let parameters = {
		type: 'GET',
		url: "/api/test/" + student_test_query
	};

	$.ajax(parameters)
	.done( data => {
		console.log("This should be the id of the new test: " + data)
		let test_url = window.location.href.split('/');
		let new_href = test_url[0] + "//" + test_url[2] + "/api/take/" + data;
		 window.location.replace(new_href);
	});
};

// Get and display results
// // =============================================================



// Event Listeners
// =============================================================

$('#testGet-btn').click(function (event) {
	event.preventDefault();
	console.log("Get test button was clicked.");
	$("#questionDisplay").attr("aria-hidden", false);
	currentTest = $("#testGet-input").val().trim();
	getTest(currentTest);

});

$('#submitTest-btn').click(function (event) {
	event.preventDefault();
	console.log("Submit button was clicked.");
	$("#resultsDisplay").attr("aria-hidden", false);
});




// Document Ready
// =============================================================

$( document ).ready(function() {	
	console.log("testTake.js is now loaded.");
	getUser();
});

