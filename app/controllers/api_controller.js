let db_controller = require("./db_controller.js")

module.exports = {

	get_test: (req, res) => {
		db_controller.get_test(req.body.id)
			.then(data => {
				res.send(data);
			});
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
		db.controller.get_result(req.body.id)
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
		db_controller.get_all_answer(req.body.question_id)
			.then(data => {
				res.send(data);
			});
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
		let scope = this;
		db_controller.create_question(req.body.test_id , req.body.question_phrase)
			.then(data => {
				for (let answer in req.body.answers){
					scope.create_answer(data.id , req.body.answers[answer].answer_phrase , req.body.answers[answer].correct_answer)
				}
				res.send(data);
			})
	},
	create_answer: (question_id , answer_phrase , correct_answer) => {
		db_controller.create_answer(question_id , answer_phrase , correct_answer);
	},

	create_result: (req, res) => {
		db.controller.create_result(req.body.test_id, req.user.id, score)
			.then(data => {
				res.send(data);
			})
	}
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