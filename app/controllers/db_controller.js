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
	
};