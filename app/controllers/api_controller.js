let db_controller = require("./db_controller.js");

let api_controller = {
	get_test: (req, res) => {

		let test_array = [];
		let question_id_array_query = [];


		db_controller.get_test_by_name(req.body.test_name)
			.then(data => {
				return db_controller.get_all_question(data.id);
			})
			.then(data => {
				for (let i in data){
					let question_object = {};
					question_object.question_phrase = data[i].dataValues.question_phrase;
					question_object.test_id = data[i].dataValues.TestId;
					question_object.question_id = data[i].dataValues.id

					
					console.log("<--------------------------------------------------------->");
					console.log(data[i].dataValues);
					console.log("<--------------------------------------------------------->");
				}
				res.json(data);
			});
		//Retrieve test_id
		//Search for all questions tied to test_id
		//Create array with all question_id's
		//Search for all answers tied to the multi-query of question_ids
		//Construct Test Array of Question Objects
			// let testArray = []
			// Construct each question object
			
			// [

			// 	{	
			// 		Question_phrase: 'aksjfkjb?',
			// 		Answers: [
			// 			{
			// 				answer_phrase: 'w',
			// 				answer_id: 4
			// 			},
			// 			{
			// 				answer_phrase: 'd',
			// 				answer_id: 3
			// 			},
			// 			{
			// 				answer_phrase: 'c',
			// 				answer_id: 2
			// 			},
			// 			{
			// 				answer_phrase: 'b',
			// 				answer_id: 1
			// 			}
			// 		],
			// 		Question_Id: 1,
			// 		Test_Id: 2
			// 	},
			// 	{	
			// 		Question_phrase: 'aksjfkjb?',
			// 		Answers: [
			// 			{
			// 				answer_phrase: 'w',
			// 				answer_id: 4
			// 			},
			// 			{
			// 				answer_phrase: 'd',
			// 				answer_id: 3
			// 			},
			// 			{
			// 				answer_phrase: 'c',
			// 				answer_id: 2
			// 			},
			// 			{
			// 				answer_phrase: 'b',
			// 				answer_id: 1
			// 			}
			// 		],
			// 		Question_Id: 1,
			// 		Test_Id: 2
			// 	}{	
			// 		Question_phrase: 'aksjfkjb?',
			// 		Answers: [
			// 			{
			// 				answer_phrase: 'w',
			// 				answer_id: 4
			// 			},
			// 			{
			// 				answer_phrase: 'd',
			// 				answer_id: 3
			// 			},
			// 			{
			// 				answer_phrase: 'c',
			// 				answer_id: 2
			// 			},
			// 			{
			// 				answer_phrase: 'b',
			// 				answer_id: 1
			// 			}
			// 		],
			// 		Question_Id: 1,
			// 		Test_Id: 2
			// 	}
			
			
			// ]
			


        // var test = {};
        // var testObj = {};
        // db_controller.get_test(1)
        //     .then(data1 => {
        //         let scope2 = this;
        //         console.log(data1);
        //         testObj.test_name = data1.test_name;
        //         db_controller.get_all_question(data1.id)
        //             .then(data2 => {
        //                 for(var i = 0; i < data2.length; i++) {
        //                     testObj[i].question_phrase = data2[i].question_phrase;
        //                     db_controller.get_all_answer(data2[i].id)
        //                     .then(data3 => {
        //                         for(var j = 0; j < data3.length; j++) {
        //                             testObj[i].answers[j].phrase = data[j].answer_phrase;
        //                             testObj[i].answers[j].answer_id = data[j].id;
        //                         }
        //                     });
        //                 };
        //             });
        //         test.testObj = testObj;
        //         res.send(test);
        //     });
    },

	get_question: (req, res) => {
		db_controller.get_question(req.body.id)
			.then(data => {
				res.send(data);
			});
	},

	get_answer: (req, res) => {
		db_controller.get_answer(req.body.id)
			.then(data => {
				res.send(data);
			});
	},

	get_result: (req, res) => {
		db_controller.get_result(req.body.id)
			.then(data => {
				res.send(data);
			});
	},

	get_all_test: (req, res) => {
		db_controller.get_all_test(req.user.id)
			.then(data => {
				res.send(data);
			});
	},

	get_all_question: (req, res) => {
		db_controller.get_all_question(req.body.test_id)
			.then(data => {
				res.send(data);
			});
	},

	get_all_answer: (req, res) => {
		console.log("nada");
		res.send("aint nada here");
	},

	get_all_result_user: (req, res) => {
		db_controller.get_all_answer(req.user.id)
			.then(data => {
				res.send(data);
			});
	},

	get_all_result_test: (req, res) => {
		db_controller.get_all_answer(req.body.test_id)
			.then(data => {
				res.send(data);
			});
	},

	create_test: (req , res) => {
		db_controller.create_test(req.user.id , req.body.test_name)
			.then(data => {
				res.send(data);
			});
	},
	create_question: (req , res) => {
		db_controller.create_question(req.body.test_id , req.body.question_phrase)
			.then(data => {
				for (let answer in req.body.answers){
					x.create_answer(data.id , req.body.answers[answer].answer_phrase , req.body.answers[answer].correct_answer)
				}
				res.send(data);
			})
	},

	create_answer: (question_id , answer_phrase , correct_answer) => {
		db_controller.create_answer(question_id , answer_phrase , correct_answer);
	},

	calculate_result: (req, res) => {
		
		let answers_id_array = [];
		for (let key in req.body.answers) {
			answers_id_array.push(req.body.answers[key].id);
		}
		api_controller.get_multiple_answers_by_id(answers_id_array)
			.then(data => {
				api_controller.create_result(req.body.test_id , req.body.id , api_controller.calculate_score(data))
					.then( data => {
						res.json(data);
					});
			})
	},

	create_result: (test_id , user_id , score) => db_controller.create_result(test_id , user_id , score),

	get_multiple_answers_by_id: (answers_id_array) => db_controller.get_multiple_answers_by_id(answers_id_array),

	calculate_score: data => {
		let total_correct = 0;
		let total_questions = 0;
		for (let index in data){
			if (data[index].correct_answer) {
				total_correct++;
			}
			total_questions++;
		};

		return (100 * (total_correct / total_questions)).toFixed(2);

	},

	update_answer: (req , res) => {
		db_controller.update_answer(req.body.answer_id , req.body.answer_phrase , req.body.correct_answer)
			.then(data => {
				res.send(data);
			});
	},
	update_question: (req , res) => {
		db_controller.update_question(req.body.question_id , req.body.question_phrase)
			.then(data => {
				res.send(data);
			});
	},
	update_test_name: (req , res) => {
		db_controller.update_test_name(req.body.test_id , req.body.test_name)
			.then(data => {
				res.send(data);
			});
	},
	update_result: (req, res) => {
		db_controller.update_result(req.body.student_id , req.body.score)
			.then(data => {
				res.send(data);
			});
	},
	delete_user: (req , res) => {
		db_controller.delete_user(req.user.id)
			.then(data => {
				res.send(data);
			});
	},
	delete_test: (req , res) => {
		db_controller.delete_test(req.body.test_id)
			.then(data => {
				res.send(data);
			});
	},
	delete_question: (req , res) => {
		db_controller.delete_question(req.body.question_id)
			.then(data => {
				res.send(data);
			});
	},
	delete_answer: (req , res) => {
		db_controller.delete_answer(req.body.answer_id)
			.then(data => {
				res.send(data);
			});
	}
};

module.exports = api_controller;