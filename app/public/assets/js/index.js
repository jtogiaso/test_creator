// *****************************************************************************
//
// Index.js - Client script for login/signup page.
//
// =============================================================

// Global variables
// =============================================================
var currentUser;

// Functions for saving user to session storage
// =============================================================

var setUser = function(email) {
	currentUser = $(email).val().trim();
	sessionStorage.setItem("username", currentUser);
};

// Event Listeners
// =============================================================

$("#access-login").on("click", function(event) {
	$(this).addClass("js-active");
	$("#access-signup").removeClass("js-active");
	$("#login").attr("aria-hidden", false);
	$("#signup").attr("aria-hidden", true);
});

$("#access-signup").on("click", function(event) {
	$(this).addClass("js-active");
	$("#access-login").removeClass("js-active");	
	$("#signup").attr("aria-hidden", false);
	$("#login").attr("aria-hidden", true);	
});

$("[value='Log In']").on("click", function(event) {
	setUser("#login-email");
});

$("[value='Sign Up']").on("click", function(event) {
	setUser("#signup-email");
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
	console.log("Index.js is now loaded.");
});


