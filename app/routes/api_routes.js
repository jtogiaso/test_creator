// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const db = require("../models");
const api_controller = require("../controllers/api_controller.js");

// Routes
// =============================================================
module.exports = function(app) {
// ===============================================================================

// Get all tests test creator
  app.get("/api/tests", api_controller.get_all_test);

// Get all questions and related `answers` for a test
  app.get("/api/questions", api_controller.get_all_question);

// // Get all tests
//   app.get("/api/answers", api_controller.get_all_answer);

// // Get one result
//   app.get("/api/result", api_controller.get_result);  

// Get all results by user 
  app.get("/api/all_result_user", api_controller.get_all_result_user);

 // Get all results by test -> for test takers only
  app.get("/api/all_result_test", api_controller.get_all_result_test);


// Get one test for test taker, should also retrive all the questions and answers
  app.get("/api/test/:name", api_controller.get_test);

  // ===============================================================================
  app.get("/api/take/:id", api_controller.get_test_obj);

// Add a new test
  app.post("/api/test", api_controller.create_test);

// Add a question to test
  app.post("/api/question", api_controller.create_question);

//Add a result
  app.post("/api/result", api_controller.calculate_result);

  // ===============================================================================

//Update a question
  app.put("/api/question", api_controller.update_question);

//Update a test name
  app.put("/api/test", api_controller.update_test_name);

//Update an answer
  app.put("/api/answer", api_controller.update_answer);

//Update a result
  app.put("/api/resut", api_controller.update_result);

// ===============================================================================

//Delete user
  app.delete("/api/user", api_controller.delete_user);

//Delete Test
  app.delete("/api/test", api_controller.delete_test);

//Delete Question
  app.delete("/api/question", api_controller.delete_question);

//Delete Answer
  app.delete("/api/answer", api_controller.delete_answer);

};
