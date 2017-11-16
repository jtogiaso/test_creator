// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const connection = require("../config/connection.js");
const api_controller = require("../../controllers/api_controller.js");

// Routes
// =============================================================
module.exports = function(app) {

  // Add a new test
  app.post("/api/new_test_name", function(req , res) {
    //get username -> current_user saved on either local_storage or session_storage
    //get req.body.test_name
    //send sequelize database the test_name 

    //return Test object
    console.log("Someone has called upon the API Test Name creation path!");
  });

  // Add a question to test
  app.post("/api/new_question_and_answers", function(req, res) {
    //get req.body.question_phrase
    //get req.body.answer_true
    //for (all other false answers that exist)
    //  get req.body.answer_false_i
    //send
    console.log("Someone has called upon the API New_Question_and_Answers creation path!");
  });

  app.put("/api/update_question" , function(req , res){

  });

}; 
