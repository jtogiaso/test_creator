console.log("Client.js is loaded.");
//////////////////////////////////////////////
// Log in functions
//TO DO validation

var currentUser;

var setUser = function() {
	currentUser = $("input[name='user_name']").val().trim();
	sessionStorage.setItem("username", currentUser);
};

var getUser = function() {
	currentUser = sessionStorage.getItem("username");
	if(currentUser) {
		$("#user-label").text(currentUser);
	} else {
		$("#user-label").text("ERROR, missing username");
	}
};

$("#login").on("click", function(event) {
	event.preventDefault();
	
	setUser();
	
});




$(document).ready(function() {
	
	getUser();


});//end document ready






/*


$("").on("click", function(event) {
	event.preventDefault();
	
});

*/

