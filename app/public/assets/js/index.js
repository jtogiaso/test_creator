//  INDEX JS//
////////////////////////
console.log("Index.js is loaded.");
$("#access-login").on("click", function(event) {
	$("#login").attr("aria-hidden", false);
	$("#signup").attr("aria-hidden", true);
});

$("#access-signup").on("click", function(event) {
	$("#signup").attr("aria-hidden", false);
	$("#login").attr("aria-hidden", true);	
});
