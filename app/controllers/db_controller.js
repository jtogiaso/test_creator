let models = require("../models");

module.exports = {
	create_test: (userId , testName) => {
		return models.Test.create(
			{
				UserId: userId,
				test_name: testName
			}
		)
	},

	create_question: (testId, questionPhrase) => {
		return models.Question.create(
			{
				TestId: testId,
				question_phrase: questionPhrase
			}
		)
	},

	create_answer: (questionId, answerPhrase, isCorrect) => {
		return models.Answer.create(
			{
				QuestionId: questionId,
				answer_phrase: answerPhrase,
				correct_answer: isCorrect
			}
		)
	},

	update_test_name: (testId, testName) => {
		return models.Test.update(
			{
				test_name: testName
			},
			{
				where: 
				{
					TestId: testId
				}
			}
		)
	},

	update_question: (questionId, questionPhrase) => {
		return models.Question.update(
			{
				question_phrase: questionPhrase
			},
			{
				where:
				{
					QuestionId: questionId
				}
			}
		)
	},
	
	update_answer: (answerId, answerPhrase) => {
		return models.Answer.update(
			{
				answer_phrase: answerPhrase
			},
			{
				where:
				{
					AnswerId: answerId
				}
			}
		)
	},

	delete_test: (testId) => {
		return models.Test.update(
			{
				deleted: true
			},
			{
				where:
				{
					TestId: testId
				}
			}
		)
	},

	delete_question: (questionId) => {
		return models.Question.update(
			{
				deleted: true
			},
			{
				where:
				{
					QuestionId: questionId
				}
			}
		)
	},

	delete_answer: (answerId) => {
		return models.Answer.update(
			{
				deleted: true
			},
			{
				where:
				{
					AnswerId: answerId
				}
			}
		)
	},

	deleted_user: (userId) => {
		return models.User.update(
			{
				status: "inactive"
			},
			{
				where:
				{
					id: userId
				}
			}
		)
	}
};