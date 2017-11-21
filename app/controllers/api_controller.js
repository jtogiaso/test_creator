let db_controller = require("./db_controller.js")

module.exports = {
	create_test: (req , res) => {
		db_controller.create_test(req.user.id , req.body.test_name)
			.then(data => {
				res.send(data);
			});
	},
	create_question: (req , res) => {
		db_controller.create_question(req.body.test_id , req.body.question_phrase)
	},
	create_answer: (req , res) => {

	}
};