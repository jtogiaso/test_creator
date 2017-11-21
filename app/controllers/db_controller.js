let models = require("../models");

module.exports = {

	get_test: (testId) => {
		return models.Test.findOne({
			where: {
				id: testId
			}
		})
	},

	get_all_test: (userId) => {
		return models.Test.findAll({
			where: {
				UserId: userId
			}
		})
	},

	get_question: (questionId) => {
		return models.Question.findOne({
			where: {
				id: questionId
			}
		})
	},

	get_all_question: (testId) => {
		return models.Question.findAll({
			where: {
				TestId: testId
			}
		})
	},

	get_answer: (answerId) => {
		return models.Answer.findOne({
			where: {
				id: answerId
			}
		})
	}

	get_all_answer: (questionId) => {
		return models.Answer.findAll({
			where: {
				QuestionId: questionId
			}
		})
	},

	get_result: (resultId) => {
		return models.Result.findOne({
			where: {
				id: resultId
			}
		})
	},

	get_result_user: (userId) => {
		return models.Result.findAll({
			where: {
				UserId: userId
			}
		})
	},

	get_result_test: (testId) => {
		return models.Result.findAll({
			where: {
				TestId: testId
			}
		})
	},

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

	create_result: (testId, userId, score) => {
		return models.Result.create(
			{
				TestId: testId,
				UserId: userId,
				score: score
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

	update_result: (userId, score) => {
		return models.Result.update(
			{
				score: score
			},
			{
				where:
				{
					UserId: userId
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