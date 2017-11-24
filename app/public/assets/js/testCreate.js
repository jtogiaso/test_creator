console.log("testCreate.js is loaded.");
var currentUser;
var currentTest;

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

$('#testCreate-btn').click(function (event) {
	event.preventDefault();
	console.log("Create test button was clicked.");
	createTest();

});

var testObj = {
    	test_name: "whatever",
    	1: {
    		question_phrase: "question1",
    		answers: {
    			1: {phrase: "answer1"},
    			2: {phrase: "answer2"},
    			3: {phrase: "answer3"},
    			4: {phrase: "answer4"}
    		}
    	},
    	2: {
    		question_phrase: "question2",
    		answers: {
    			1: {phrase: "answer1"},
    			2: {phrase: "answer2"},
    			3: {phrase: "answer3"},
    			4: {phrase: "answer4"}
    		}
    	},
    	3: {
    		question_phrase: "question3",
    		answers: {
    			1: {phrase: "answer1"},
    			2: {phrase: "answer2"},
    			3: {phrase: "answer3"},
    			4: {phrase: "answer4"}
    		}
    	},
    	4: {
    		question_phrase: "question4",
    		answers: {
    			1: {phrase: "answer1"},
    			2: {phrase: "answer2"},
    			3: {phrase: "answer3"},
    			4: {phrase: "answer4"}
    		}
    	},
    	5: {
    		question_phrase: "question5",
    		answers: {
    			1: {phrase: "answer1"},
    			2: {phrase: "answer2"},
    			3: {phrase: "answer3"},
    			4: {phrase: "answer4"}
    		}
    	}
    };

    var test = {
    	testObj: testObj
    };
