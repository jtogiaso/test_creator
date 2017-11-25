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

var getTest = function(neededTest) {
	let parameters = {
		type: 'GET',
		url: "/api/test",
		data: {
			test_name: $("#testGet-input").val().trim()
		}
	};

	$.ajax(parameters)
		.done(function (data) {
			console.log("Test " + parameters.data.test_name + " has been loaded.");
			console.log(data);
		})
		.catch(function (err) {
			console.log("Error: ");
			console.log(err);
		});	
};



// Event Listeners
// =============================================================

$('#testGet-btn').click(function (event) {
	event.preventDefault();
	console.log("Get test button was clicked.");
	$("#testDisplay").attr("aria-hidden", false);
	currentTest = $("#testGet-input").val().trim();
	getTest(currentTest);

});




// Document Ready
// =============================================================

$( document ).ready(function() {	
	console.log("testTake.js is now loaded.");
	getUser();
});

