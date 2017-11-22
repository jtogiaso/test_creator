//  REVISED CLIENT JS //
////////////////////////
$('#create_test').click(function (event) {
	event.preventDefault();
	console.log("This button was definitely clicked?");
	let parameters = {
		type: 'POST',
		url: "api/test",
		data: {
			test_name: $("#input1").val()
		}
	};

	$.ajax(parameters)
		.done(function (data) {
			console.log("Successful");
			console.log(data);
		})
		.catch(function (err) {
			console.log("Error: ");
			console.log(err);
		});
});
