////////////////////////////////////////////
// html container variables

////////////////////////////////////////////
// html container variables

var openAccess = $("#open-user-forms");
var closeAccess = $("#close-user-forms");
var userForms = $("#user-forms");


////////////////////////////////////////////
// general show/hide functions

function open(elem) {
	$(elem).addClass("js-active");
}

function close(elem) {
	$(elem).removeClass("js-active");
}

///////////////////////////////////////////
// event handlers

// open user forms

(openAccess).on("click", function () {
	console.log("opening log in screen");
	open(userForms);
});

// close user forms

// closes signup/login box
$(closeAccess).on("click", function () {
	console.log("closing log in screen");
	close(userForms);

});



















































console.log("Frontend.js is loaded.");


$("#signup").on("click", function(event) {
	event.preventDefault();
	console.log("Add stuff for modal.");

});