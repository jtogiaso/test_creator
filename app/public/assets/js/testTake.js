// *****************************************************************************
//
// testTake.js - Client script for login/signup page.
//
// =============================================================

// Global Variables
// =============================================================
var currentTest;
var currentUser;

alert('oaisfhosihgfd');

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
		url: "/api/test",
		data: {
			test_name: student_test_query
		}
	};

	return $.ajax(parameters);
		// .done(function (data) {
		// 	console.log("Test " + parameters.data.test_name + " has been loaded.");
		// 	console.log(data);
		// })
		// .catch(function (err) {
		// 	console.log("Error: ");
		// 	console.log(err);
		// });	
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
	getTest(currentTest)
		.done(data => {
			console.log("Made it past promise")
			let parameters = {
				type: 'GET',
				url: "/testTaker",
				data: {
					test: data
				}
			};

			$.ajax(parameters);
		});

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

